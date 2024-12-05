# `dataOciApmTracesTrace` Submodule <a name="`dataOciApmTracesTrace` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTrace <a name="DataOciApmTracesTrace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace oci_apm_traces_trace}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTrace(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  trace_key: str,
  id: str = None,
  time_trace_started_greater_than_or_equal_to: str = None,
  time_trace_started_less_than: str = None,
  trace_namespace: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.traceKey">trace_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.timeTraceStartedGreaterThanOrEqualTo">time_trace_started_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.timeTraceStartedLessThan">time_trace_started_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.traceNamespace">trace_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}.

---

##### `trace_key`<sup>Required</sup> <a name="trace_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.traceKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_trace_started_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_trace_started_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.timeTraceStartedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}.

---

##### `time_trace_started_less_than`<sup>Optional</sup> <a name="time_trace_started_less_than" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.timeTraceStartedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}.

---

##### `trace_namespace`<sup>Optional</sup> <a name="trace_namespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.Initializer.parameter.traceNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedGreaterThanOrEqualTo">reset_time_trace_started_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedLessThan">reset_time_trace_started_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTraceNamespace">reset_trace_namespace</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_trace_started_greater_than_or_equal_to` <a name="reset_time_trace_started_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedGreaterThanOrEqualTo"></a>

```python
def reset_time_trace_started_greater_than_or_equal_to() -> None
```

##### `reset_time_trace_started_less_than` <a name="reset_time_trace_started_less_than" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTimeTraceStartedLessThan"></a>

```python
def reset_time_trace_started_less_than() -> None
```

##### `reset_trace_namespace` <a name="reset_trace_namespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.resetTraceNamespace"></a>

```python
def reset_trace_namespace() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmTracesTrace resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTrace.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTrace.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTrace.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTrace.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmTracesTrace resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmTracesTrace to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmTracesTrace that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTrace to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.errorSpanCount">error_span_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.isFault">is_fault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanDurationInMs">root_span_duration_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanOperationName">root_span_operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanServiceName">root_span_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.serviceSummaries">service_summaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList">DataOciApmTracesTraceServiceSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanCount">span_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spans">spans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList">DataOciApmTracesTraceSpansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanSummary">span_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList">DataOciApmTracesTraceSpanSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeEarliestSpanStarted">time_earliest_span_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeLatestSpanEnded">time_latest_span_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanEnded">time_root_span_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanStarted">time_root_span_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceDurationInMs">trace_duration_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorCode">trace_error_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorType">trace_error_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceStatus">trace_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualToInput">time_trace_started_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThanInput">time_trace_started_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKeyInput">trace_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespaceInput">trace_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualTo">time_trace_started_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThan">time_trace_started_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKey">trace_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespace">trace_namespace</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `error_span_count`<sup>Required</sup> <a name="error_span_count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.errorSpanCount"></a>

```python
error_span_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_fault`<sup>Required</sup> <a name="is_fault" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.isFault"></a>

```python
is_fault: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `root_span_duration_in_ms`<sup>Required</sup> <a name="root_span_duration_in_ms" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanDurationInMs"></a>

```python
root_span_duration_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_span_operation_name`<sup>Required</sup> <a name="root_span_operation_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanOperationName"></a>

```python
root_span_operation_name: str
```

- *Type:* str

---

##### `root_span_service_name`<sup>Required</sup> <a name="root_span_service_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.rootSpanServiceName"></a>

```python
root_span_service_name: str
```

- *Type:* str

---

##### `service_summaries`<sup>Required</sup> <a name="service_summaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.serviceSummaries"></a>

```python
service_summaries: DataOciApmTracesTraceServiceSummariesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList">DataOciApmTracesTraceServiceSummariesList</a>

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `span_count`<sup>Required</sup> <a name="span_count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanCount"></a>

```python
span_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spans`<sup>Required</sup> <a name="spans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spans"></a>

```python
spans: DataOciApmTracesTraceSpansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList">DataOciApmTracesTraceSpansList</a>

---

##### `span_summary`<sup>Required</sup> <a name="span_summary" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.spanSummary"></a>

```python
span_summary: DataOciApmTracesTraceSpanSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList">DataOciApmTracesTraceSpanSummaryList</a>

---

##### `time_earliest_span_started`<sup>Required</sup> <a name="time_earliest_span_started" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeEarliestSpanStarted"></a>

```python
time_earliest_span_started: str
```

- *Type:* str

---

##### `time_latest_span_ended`<sup>Required</sup> <a name="time_latest_span_ended" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeLatestSpanEnded"></a>

```python
time_latest_span_ended: str
```

- *Type:* str

---

##### `time_root_span_ended`<sup>Required</sup> <a name="time_root_span_ended" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanEnded"></a>

```python
time_root_span_ended: str
```

- *Type:* str

---

##### `time_root_span_started`<sup>Required</sup> <a name="time_root_span_started" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeRootSpanStarted"></a>

```python
time_root_span_started: str
```

- *Type:* str

---

##### `trace_duration_in_ms`<sup>Required</sup> <a name="trace_duration_in_ms" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceDurationInMs"></a>

```python
trace_duration_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trace_error_code`<sup>Required</sup> <a name="trace_error_code" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorCode"></a>

```python
trace_error_code: str
```

- *Type:* str

---

##### `trace_error_type`<sup>Required</sup> <a name="trace_error_type" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceErrorType"></a>

```python
trace_error_type: str
```

- *Type:* str

---

##### `trace_status`<sup>Required</sup> <a name="trace_status" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceStatus"></a>

```python
trace_status: str
```

- *Type:* str

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `time_trace_started_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_trace_started_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualToInput"></a>

```python
time_trace_started_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_trace_started_less_than_input`<sup>Optional</sup> <a name="time_trace_started_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThanInput"></a>

```python
time_trace_started_less_than_input: str
```

- *Type:* str

---

##### `trace_key_input`<sup>Optional</sup> <a name="trace_key_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKeyInput"></a>

```python
trace_key_input: str
```

- *Type:* str

---

##### `trace_namespace_input`<sup>Optional</sup> <a name="trace_namespace_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespaceInput"></a>

```python
trace_namespace_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `time_trace_started_greater_than_or_equal_to`<sup>Required</sup> <a name="time_trace_started_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedGreaterThanOrEqualTo"></a>

```python
time_trace_started_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_trace_started_less_than`<sup>Required</sup> <a name="time_trace_started_less_than" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.timeTraceStartedLessThan"></a>

```python
time_trace_started_less_than: str
```

- *Type:* str

---

##### `trace_key`<sup>Required</sup> <a name="trace_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceKey"></a>

```python
trace_key: str
```

- *Type:* str

---

##### `trace_namespace`<sup>Required</sup> <a name="trace_namespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.traceNamespace"></a>

```python
trace_namespace: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTrace.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceConfig <a name="DataOciApmTracesTraceConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  apm_domain_id: str,
  trace_key: str,
  id: str = None,
  time_trace_started_greater_than_or_equal_to: str = None,
  time_trace_started_less_than: str = None,
  trace_namespace: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceKey">trace_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedGreaterThanOrEqualTo">time_trace_started_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedLessThan">time_trace_started_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceNamespace">trace_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#apm_domain_id DataOciApmTracesTrace#apm_domain_id}.

---

##### `trace_key`<sup>Required</sup> <a name="trace_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceKey"></a>

```python
trace_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_key DataOciApmTracesTrace#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#id DataOciApmTracesTrace#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_trace_started_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_trace_started_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedGreaterThanOrEqualTo"></a>

```python
time_trace_started_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_greater_than_or_equal_to DataOciApmTracesTrace#time_trace_started_greater_than_or_equal_to}.

---

##### `time_trace_started_less_than`<sup>Optional</sup> <a name="time_trace_started_less_than" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.timeTraceStartedLessThan"></a>

```python
time_trace_started_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#time_trace_started_less_than DataOciApmTracesTrace#time_trace_started_less_than}.

---

##### `trace_namespace`<sup>Optional</sup> <a name="trace_namespace" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceConfig.property.traceNamespace"></a>

```python
trace_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace#trace_namespace DataOciApmTracesTrace#trace_namespace}.

---

### DataOciApmTracesTraceServiceSummaries <a name="DataOciApmTracesTraceServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries()
```


### DataOciApmTracesTraceSpans <a name="DataOciApmTracesTraceSpans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpans()
```


### DataOciApmTracesTraceSpansLogs <a name="DataOciApmTracesTraceSpansLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs()
```


### DataOciApmTracesTraceSpansLogsSpanLogs <a name="DataOciApmTracesTraceSpansLogsSpanLogs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs()
```


### DataOciApmTracesTraceSpansTags <a name="DataOciApmTracesTraceSpansTags" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags()
```


### DataOciApmTracesTraceSpanSummary <a name="DataOciApmTracesTraceSpanSummary" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary()
```


### DataOciApmTracesTraceSpanSummaryServiceSummaries <a name="DataOciApmTracesTraceSpanSummaryServiceSummaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceServiceSummariesList <a name="DataOciApmTracesTraceServiceSummariesList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesTraceServiceSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmTracesTraceServiceSummariesOutputReference <a name="DataOciApmTracesTraceServiceSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.errorSpans">error_spans</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.spanServiceName">span_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.totalSpans">total_spans</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries">DataOciApmTracesTraceServiceSummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_spans`<sup>Required</sup> <a name="error_spans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.errorSpans"></a>

```python
error_spans: str
```

- *Type:* str

---

##### `span_service_name`<sup>Required</sup> <a name="span_service_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.spanServiceName"></a>

```python
span_service_name: str
```

- *Type:* str

---

##### `total_spans`<sup>Required</sup> <a name="total_spans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.totalSpans"></a>

```python
total_spans: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummariesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmTracesTraceServiceSummaries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceServiceSummaries">DataOciApmTracesTraceServiceSummaries</a>

---


### DataOciApmTracesTraceSpansList <a name="DataOciApmTracesTraceSpansList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesTraceSpansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmTracesTraceSpansLogsList <a name="DataOciApmTracesTraceSpansLogsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesTraceSpansLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmTracesTraceSpansLogsOutputReference <a name="DataOciApmTracesTraceSpansLogsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.eventName">event_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.spanLogs">span_logs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList">DataOciApmTracesTraceSpansLogsSpanLogsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs">DataOciApmTracesTraceSpansLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `event_name`<sup>Required</sup> <a name="event_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.eventName"></a>

```python
event_name: str
```

- *Type:* str

---

##### `span_logs`<sup>Required</sup> <a name="span_logs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.spanLogs"></a>

```python
span_logs: DataOciApmTracesTraceSpansLogsSpanLogsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList">DataOciApmTracesTraceSpansLogsSpanLogsList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmTracesTraceSpansLogs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogs">DataOciApmTracesTraceSpansLogs</a>

---


### DataOciApmTracesTraceSpansLogsSpanLogsList <a name="DataOciApmTracesTraceSpansLogsSpanLogsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesTraceSpansLogsSpanLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmTracesTraceSpansLogsSpanLogsOutputReference <a name="DataOciApmTracesTraceSpansLogsSpanLogsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logKey">log_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logValue">log_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs">DataOciApmTracesTraceSpansLogsSpanLogs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `log_key`<sup>Required</sup> <a name="log_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logKey"></a>

```python
log_key: str
```

- *Type:* str

---

##### `log_value`<sup>Required</sup> <a name="log_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.logValue"></a>

```python
log_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmTracesTraceSpansLogsSpanLogs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsSpanLogs">DataOciApmTracesTraceSpansLogsSpanLogs</a>

---


### DataOciApmTracesTraceSpansOutputReference <a name="DataOciApmTracesTraceSpansOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.durationInMs">duration_in_ms</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.isError">is_error</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.logs">logs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList">DataOciApmTracesTraceSpansLogsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.operationName">operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.parentSpanKey">parent_span_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList">DataOciApmTracesTraceSpansTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.traceKey">trace_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans">DataOciApmTracesTraceSpans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `duration_in_ms`<sup>Required</sup> <a name="duration_in_ms" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.durationInMs"></a>

```python
duration_in_ms: str
```

- *Type:* str

---

##### `is_error`<sup>Required</sup> <a name="is_error" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.isError"></a>

```python
is_error: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `logs`<sup>Required</sup> <a name="logs" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.logs"></a>

```python
logs: DataOciApmTracesTraceSpansLogsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansLogsList">DataOciApmTracesTraceSpansLogsList</a>

---

##### `operation_name`<sup>Required</sup> <a name="operation_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.operationName"></a>

```python
operation_name: str
```

- *Type:* str

---

##### `parent_span_key`<sup>Required</sup> <a name="parent_span_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.parentSpanKey"></a>

```python
parent_span_key: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.tags"></a>

```python
tags: DataOciApmTracesTraceSpansTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList">DataOciApmTracesTraceSpansTagsList</a>

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `trace_key`<sup>Required</sup> <a name="trace_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.traceKey"></a>

```python
trace_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmTracesTraceSpans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpans">DataOciApmTracesTraceSpans</a>

---


### DataOciApmTracesTraceSpansTagsList <a name="DataOciApmTracesTraceSpansTagsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesTraceSpansTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmTracesTraceSpansTagsOutputReference <a name="DataOciApmTracesTraceSpansTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagName">tag_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagValue">tag_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags">DataOciApmTracesTraceSpansTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `tag_name`<sup>Required</sup> <a name="tag_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagName"></a>

```python
tag_name: str
```

- *Type:* str

---

##### `tag_value`<sup>Required</sup> <a name="tag_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.tagValue"></a>

```python
tag_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmTracesTraceSpansTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpansTags">DataOciApmTracesTraceSpansTags</a>

---


### DataOciApmTracesTraceSpanSummaryList <a name="DataOciApmTracesTraceSpanSummaryList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesTraceSpanSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmTracesTraceSpanSummaryOutputReference <a name="DataOciApmTracesTraceSpanSummaryOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.errorSpanCount">error_span_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.isFault">is_fault</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanDurationInMs">root_span_duration_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanOperationName">root_span_operation_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanServiceName">root_span_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.serviceSummaries">service_summaries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList">DataOciApmTracesTraceSpanSummaryServiceSummariesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.spanCount">span_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeEarliestSpanStarted">time_earliest_span_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeLatestSpanEnded">time_latest_span_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanEnded">time_root_span_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanStarted">time_root_span_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceDurationInMs">trace_duration_in_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorCode">trace_error_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorType">trace_error_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceStatus">trace_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary">DataOciApmTracesTraceSpanSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_span_count`<sup>Required</sup> <a name="error_span_count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.errorSpanCount"></a>

```python
error_span_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_fault`<sup>Required</sup> <a name="is_fault" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.isFault"></a>

```python
is_fault: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `root_span_duration_in_ms`<sup>Required</sup> <a name="root_span_duration_in_ms" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanDurationInMs"></a>

```python
root_span_duration_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_span_operation_name`<sup>Required</sup> <a name="root_span_operation_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanOperationName"></a>

```python
root_span_operation_name: str
```

- *Type:* str

---

##### `root_span_service_name`<sup>Required</sup> <a name="root_span_service_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.rootSpanServiceName"></a>

```python
root_span_service_name: str
```

- *Type:* str

---

##### `service_summaries`<sup>Required</sup> <a name="service_summaries" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.serviceSummaries"></a>

```python
service_summaries: DataOciApmTracesTraceSpanSummaryServiceSummariesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList">DataOciApmTracesTraceSpanSummaryServiceSummariesList</a>

---

##### `span_count`<sup>Required</sup> <a name="span_count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.spanCount"></a>

```python
span_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_earliest_span_started`<sup>Required</sup> <a name="time_earliest_span_started" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeEarliestSpanStarted"></a>

```python
time_earliest_span_started: str
```

- *Type:* str

---

##### `time_latest_span_ended`<sup>Required</sup> <a name="time_latest_span_ended" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeLatestSpanEnded"></a>

```python
time_latest_span_ended: str
```

- *Type:* str

---

##### `time_root_span_ended`<sup>Required</sup> <a name="time_root_span_ended" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanEnded"></a>

```python
time_root_span_ended: str
```

- *Type:* str

---

##### `time_root_span_started`<sup>Required</sup> <a name="time_root_span_started" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.timeRootSpanStarted"></a>

```python
time_root_span_started: str
```

- *Type:* str

---

##### `trace_duration_in_ms`<sup>Required</sup> <a name="trace_duration_in_ms" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceDurationInMs"></a>

```python
trace_duration_in_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `trace_error_code`<sup>Required</sup> <a name="trace_error_code" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorCode"></a>

```python
trace_error_code: str
```

- *Type:* str

---

##### `trace_error_type`<sup>Required</sup> <a name="trace_error_type" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceErrorType"></a>

```python
trace_error_type: str
```

- *Type:* str

---

##### `trace_status`<sup>Required</sup> <a name="trace_status" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.traceStatus"></a>

```python
trace_status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmTracesTraceSpanSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummary">DataOciApmTracesTraceSpanSummary</a>

---


### DataOciApmTracesTraceSpanSummaryServiceSummariesList <a name="DataOciApmTracesTraceSpanSummaryServiceSummariesList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference <a name="DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace

dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.errorSpans">error_spans</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.spanServiceName">span_service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.totalSpans">total_spans</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries">DataOciApmTracesTraceSpanSummaryServiceSummaries</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `error_spans`<sup>Required</sup> <a name="error_spans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.errorSpans"></a>

```python
error_spans: str
```

- *Type:* str

---

##### `span_service_name`<sup>Required</sup> <a name="span_service_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.spanServiceName"></a>

```python
span_service_name: str
```

- *Type:* str

---

##### `total_spans`<sup>Required</sup> <a name="total_spans" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.totalSpans"></a>

```python
total_spans: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummariesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmTracesTraceSpanSummaryServiceSummaries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTrace.DataOciApmTracesTraceSpanSummaryServiceSummaries">DataOciApmTracesTraceSpanSummaryServiceSummaries</a>

---



