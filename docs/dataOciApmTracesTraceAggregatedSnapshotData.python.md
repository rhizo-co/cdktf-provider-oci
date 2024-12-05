# `dataOciApmTracesTraceAggregatedSnapshotData` Submodule <a name="`dataOciApmTracesTraceAggregatedSnapshotData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApmTracesTraceAggregatedSnapshotData <a name="DataOciApmTracesTraceAggregatedSnapshotData" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data oci_apm_traces_trace_aggregated_snapshot_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_aggregated_snapshot_data

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData(
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
  server_name: str = None,
  service_name: str = None,
  span_key: str = None,
  span_name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.traceKey">trace_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.spanKey">span_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.spanName">span_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.apmDomainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}.

---

##### `trace_key`<sup>Required</sup> <a name="trace_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.traceKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.serverName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.serviceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}.

---

##### `span_key`<sup>Optional</sup> <a name="span_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.spanKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}.

---

##### `span_name`<sup>Optional</sup> <a name="span_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.Initializer.parameter.spanName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServerName">reset_server_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServiceName">reset_service_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanKey">reset_span_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanName">reset_span_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_server_name` <a name="reset_server_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServerName"></a>

```python
def reset_server_name() -> None
```

##### `reset_service_name` <a name="reset_service_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetServiceName"></a>

```python
def reset_service_name() -> None
```

##### `reset_span_key` <a name="reset_span_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanKey"></a>

```python
def reset_span_key() -> None
```

##### `reset_span_name` <a name="reset_span_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.resetSpanName"></a>

```python
def reset_span_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApmTracesTraceAggregatedSnapshotData resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_aggregated_snapshot_data

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_aggregated_snapshot_data

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_aggregated_snapshot_data

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_aggregated_snapshot_data

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApmTracesTraceAggregatedSnapshotData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApmTracesTraceAggregatedSnapshotData to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApmTracesTraceAggregatedSnapshotData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApmTracesTraceAggregatedSnapshotData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList">DataOciApmTracesTraceAggregatedSnapshotDataDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainIdInput">apm_domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverNameInput">server_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceNameInput">service_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKeyInput">span_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanNameInput">span_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKeyInput">trace_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverName">server_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKey">span_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanName">span_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKey">trace_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.details"></a>

```python
details: DataOciApmTracesTraceAggregatedSnapshotDataDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList">DataOciApmTracesTraceAggregatedSnapshotDataDetailsList</a>

---

##### `apm_domain_id_input`<sup>Optional</sup> <a name="apm_domain_id_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainIdInput"></a>

```python
apm_domain_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `server_name_input`<sup>Optional</sup> <a name="server_name_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverNameInput"></a>

```python
server_name_input: str
```

- *Type:* str

---

##### `service_name_input`<sup>Optional</sup> <a name="service_name_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceNameInput"></a>

```python
service_name_input: str
```

- *Type:* str

---

##### `span_key_input`<sup>Optional</sup> <a name="span_key_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKeyInput"></a>

```python
span_key_input: str
```

- *Type:* str

---

##### `span_name_input`<sup>Optional</sup> <a name="span_name_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanNameInput"></a>

```python
span_name_input: str
```

- *Type:* str

---

##### `trace_key_input`<sup>Optional</sup> <a name="trace_key_input" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKeyInput"></a>

```python
trace_key_input: str
```

- *Type:* str

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `server_name`<sup>Required</sup> <a name="server_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `span_key`<sup>Required</sup> <a name="span_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanKey"></a>

```python
span_key: str
```

- *Type:* str

---

##### `span_name`<sup>Required</sup> <a name="span_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.spanName"></a>

```python
span_name: str
```

- *Type:* str

---

##### `trace_key`<sup>Required</sup> <a name="trace_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.traceKey"></a>

```python
trace_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotData.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApmTracesTraceAggregatedSnapshotDataConfig <a name="DataOciApmTracesTraceAggregatedSnapshotDataConfig" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_aggregated_snapshot_data

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig(
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
  server_name: str = None,
  service_name: str = None,
  span_key: str = None,
  span_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.apmDomainId">apm_domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.traceKey">trace_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serverName">server_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serviceName">service_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanKey">span_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanName">span_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `apm_domain_id`<sup>Required</sup> <a name="apm_domain_id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.apmDomainId"></a>

```python
apm_domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#apm_domain_id DataOciApmTracesTraceAggregatedSnapshotData#apm_domain_id}.

---

##### `trace_key`<sup>Required</sup> <a name="trace_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.traceKey"></a>

```python
trace_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#trace_key DataOciApmTracesTraceAggregatedSnapshotData#trace_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#id DataOciApmTracesTraceAggregatedSnapshotData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `server_name`<sup>Optional</sup> <a name="server_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serverName"></a>

```python
server_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#server_name DataOciApmTracesTraceAggregatedSnapshotData#server_name}.

---

##### `service_name`<sup>Optional</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#service_name DataOciApmTracesTraceAggregatedSnapshotData#service_name}.

---

##### `span_key`<sup>Optional</sup> <a name="span_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanKey"></a>

```python
span_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_key DataOciApmTracesTraceAggregatedSnapshotData#span_key}.

---

##### `span_name`<sup>Optional</sup> <a name="span_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataConfig.property.spanName"></a>

```python
span_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apm_traces_trace_aggregated_snapshot_data#span_name DataOciApmTracesTraceAggregatedSnapshotData#span_name}.

---

### DataOciApmTracesTraceAggregatedSnapshotDataDetails <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetails" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_aggregated_snapshot_data

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApmTracesTraceAggregatedSnapshotDataDetailsList <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetailsList" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_aggregated_snapshot_data

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference <a name="DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apm_traces_trace_aggregated_snapshot_data

dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails">DataOciApmTracesTraceAggregatedSnapshotDataDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApmTracesTraceAggregatedSnapshotDataDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApmTracesTraceAggregatedSnapshotData.DataOciApmTracesTraceAggregatedSnapshotDataDetails">DataOciApmTracesTraceAggregatedSnapshotDataDetails</a>

---



