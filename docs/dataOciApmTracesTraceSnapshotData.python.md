# `dataOciApmTracesTraceSnapshotData` Submodule <a name="`dataOciApmTracesTraceSnapshotData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTraceSnapshotData <a name="DataOciApmTracesTraceSnapshotData" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data oci_apm_traces_trace_snapshot_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_snapshot_data

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData(
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
  is_summarized: typing.Union[bool, IResolvable] = None,
  snapshot_time: str = None,
  thread_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.traceKey">trace_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.isSummarized">is_summarized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.snapshotTime">snapshot_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.threadId">thread_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}.

---

##### `trace_key`<sup>Required</sup> <a name="trace_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.traceKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_summarized`<sup>Optional</sup> <a name="is_summarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.isSummarized"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}.

---

##### `snapshot_time`<sup>Optional</sup> <a name="snapshot_time" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.snapshotTime"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}.

---

##### `thread_id`<sup>Optional</sup> <a name="thread_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.Initializer.parameter.threadId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetIsSummarized">reset_is_summarized</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetSnapshotTime">reset_snapshot_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetThreadId">reset_thread_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_summarized` <a name="reset_is_summarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetIsSummarized"></a>

```python
def reset_is_summarized() -> None
```

##### `reset_snapshot_time` <a name="reset_snapshot_time" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetSnapshotTime"></a>

```python
def reset_snapshot_time() -> None
```

##### `reset_thread_id` <a name="reset_thread_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.resetThreadId"></a>

```python
def reset_thread_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmTracesTraceSnapshotData resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_snapshot_data

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_snapshot_data

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_snapshot_data

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_snapshot_data

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmTracesTraceSnapshotData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmTracesTraceSnapshotData to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmTracesTraceSnapshotData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTraceSnapshotData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceSnapshotDetails">trace_snapshot_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarizedInput">is_summarized_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTimeInput">snapshot_time_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadIdInput">thread_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKeyInput">trace_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarized">is_summarized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTime">snapshot_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadId">thread_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKey">trace_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `trace_snapshot_details`<sup>Required</sup> <a name="trace_snapshot_details" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceSnapshotDetails"></a>

```python
trace_snapshot_details: DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_summarized_input`<sup>Optional</sup> <a name="is_summarized_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarizedInput"></a>

```python
is_summarized_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_time_input`<sup>Optional</sup> <a name="snapshot_time_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTimeInput"></a>

```python
snapshot_time_input: str
```

- *Type:* str

---

##### `thread_id_input`<sup>Optional</sup> <a name="thread_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadIdInput"></a>

```python
thread_id_input: str
```

- *Type:* str

---

##### `trace_key_input`<sup>Optional</sup> <a name="trace_key_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKeyInput"></a>

```python
trace_key_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_summarized`<sup>Required</sup> <a name="is_summarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.isSummarized"></a>

```python
is_summarized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `snapshot_time`<sup>Required</sup> <a name="snapshot_time" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.snapshotTime"></a>

```python
snapshot_time: str
```

- *Type:* str

---

##### `thread_id`<sup>Required</sup> <a name="thread_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.threadId"></a>

```python
thread_id: str
```

- *Type:* str

---

##### `trace_key`<sup>Required</sup> <a name="trace_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.traceKey"></a>

```python
trace_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotData.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceSnapshotDataConfig <a name="DataOciApmTracesTraceSnapshotDataConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_snapshot_data

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig(
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
  is_summarized: typing.Union[bool, IResolvable] = None,
  snapshot_time: str = None,
  thread_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.traceKey">trace_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.isSummarized">is_summarized</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.snapshotTime">snapshot_time</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.threadId">thread_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#apm_domain_id DataOciApmTracesTraceSnapshotData#apm_domain_id}.

---

##### `trace_key`<sup>Required</sup> <a name="trace_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.traceKey"></a>

```python
trace_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#trace_key DataOciApmTracesTraceSnapshotData#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#id DataOciApmTracesTraceSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_summarized`<sup>Optional</sup> <a name="is_summarized" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.isSummarized"></a>

```python
is_summarized: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#is_summarized DataOciApmTracesTraceSnapshotData#is_summarized}.

---

##### `snapshot_time`<sup>Optional</sup> <a name="snapshot_time" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.snapshotTime"></a>

```python
snapshot_time: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#snapshot_time DataOciApmTracesTraceSnapshotData#snapshot_time}.

---

##### `thread_id`<sup>Optional</sup> <a name="thread_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataConfig.property.threadId"></a>

```python
thread_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_snapshot_data#thread_id DataOciApmTracesTraceSnapshotData#thread_id}.

---

### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_snapshot_data

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_snapshot_data

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference <a name="DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_snapshot_data

dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceSnapshotData.DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails">DataOciApmTracesTraceSnapshotDataTraceSnapshotDetails</a>

---



