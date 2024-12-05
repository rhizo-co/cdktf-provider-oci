# `dataOciJmsFleetPerformanceTuningAnalysisResults` Submodule <a name="`dataOciJmsFleetPerformanceTuningAnalysisResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResults <a name="DataOciJmsFleetPerformanceTuningAnalysisResults" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results oci_jms_fleet_performance_tuning_analysis_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  application_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetPerformanceTuningAnalysisResultsFilter]] = None,
  host_name: str = None,
  id: str = None,
  managed_instance_id: str = None,
  time_end: str = None,
  time_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResults#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#application_id DataOciJmsFleetPerformanceTuningAnalysisResults#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#host_name DataOciJmsFleetPerformanceTuningAnalysisResults#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#id DataOciJmsFleetPerformanceTuningAnalysisResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#managed_instance_id DataOciJmsFleetPerformanceTuningAnalysisResults#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_end DataOciJmsFleetPerformanceTuningAnalysisResults#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_start DataOciJmsFleetPerformanceTuningAnalysisResults#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResults#fleet_id}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.applicationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#application_id DataOciJmsFleetPerformanceTuningAnalysisResults#application_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#filter DataOciJmsFleetPerformanceTuningAnalysisResults#filter}

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.hostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#host_name DataOciJmsFleetPerformanceTuningAnalysisResults#host_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#id DataOciJmsFleetPerformanceTuningAnalysisResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#managed_instance_id DataOciJmsFleetPerformanceTuningAnalysisResults#managed_instance_id}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.timeEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_end DataOciJmsFleetPerformanceTuningAnalysisResults#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.Initializer.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_start DataOciJmsFleetPerformanceTuningAnalysisResults#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetApplicationId">reset_application_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetManagedInstanceId">reset_managed_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetTimeEnd">reset_time_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetTimeStart">reset_time_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsFleetPerformanceTuningAnalysisResultsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]]

---

##### `reset_application_id` <a name="reset_application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetApplicationId"></a>

```python
def reset_application_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_host_name` <a name="reset_host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_instance_id` <a name="reset_managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetManagedInstanceId"></a>

```python
def reset_managed_instance_id() -> None
```

##### `reset_time_end` <a name="reset_time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetTimeEnd"></a>

```python
def reset_time_end() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResults resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsFleetPerformanceTuningAnalysisResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsFleetPerformanceTuningAnalysisResults to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsFleetPerformanceTuningAnalysisResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetPerformanceTuningAnalysisResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList">DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.performanceTuningAnalysisResultCollection">performance_tuning_analysis_result_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.applicationIdInput">application_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeEndInput">time_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.filter"></a>

```python
filter: DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList">DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList</a>

---

##### `performance_tuning_analysis_result_collection`<sup>Required</sup> <a name="performance_tuning_analysis_result_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.performanceTuningAnalysisResultCollection"></a>

```python
performance_tuning_analysis_result_collection: DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList</a>

---

##### `application_id_input`<sup>Optional</sup> <a name="application_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.applicationIdInput"></a>

```python
application_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsFleetPerformanceTuningAnalysisResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]]

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `time_end_input`<sup>Optional</sup> <a name="time_end_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeEndInput"></a>

```python
time_end_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResults.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResultsConfig <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  application_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetPerformanceTuningAnalysisResultsFilter]] = None,
  host_name: str = None,
  id: str = None,
  managed_instance_id: str = None,
  time_end: str = None,
  time_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResults#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.applicationId">application_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#application_id DataOciJmsFleetPerformanceTuningAnalysisResults#application_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#host_name DataOciJmsFleetPerformanceTuningAnalysisResults#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#id DataOciJmsFleetPerformanceTuningAnalysisResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#managed_instance_id DataOciJmsFleetPerformanceTuningAnalysisResults#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_end DataOciJmsFleetPerformanceTuningAnalysisResults#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_start DataOciJmsFleetPerformanceTuningAnalysisResults#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#fleet_id DataOciJmsFleetPerformanceTuningAnalysisResults#fleet_id}.

---

##### `application_id`<sup>Optional</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#application_id DataOciJmsFleetPerformanceTuningAnalysisResults#application_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetPerformanceTuningAnalysisResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#filter DataOciJmsFleetPerformanceTuningAnalysisResults#filter}

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#host_name DataOciJmsFleetPerformanceTuningAnalysisResults#host_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#id DataOciJmsFleetPerformanceTuningAnalysisResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#managed_instance_id DataOciJmsFleetPerformanceTuningAnalysisResults#managed_instance_id}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_end DataOciJmsFleetPerformanceTuningAnalysisResults#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsConfig.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#time_start DataOciJmsFleetPerformanceTuningAnalysisResults#time_start}.

---

### DataOciJmsFleetPerformanceTuningAnalysisResultsFilter <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#name DataOciJmsFleetPerformanceTuningAnalysisResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#values DataOciJmsFleetPerformanceTuningAnalysisResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#regex DataOciJmsFleetPerformanceTuningAnalysisResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#name DataOciJmsFleetPerformanceTuningAnalysisResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#values DataOciJmsFleetPerformanceTuningAnalysisResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_performance_tuning_analysis_results#regex DataOciJmsFleetPerformanceTuningAnalysisResults#regex}.

---

### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection()
```


### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsFleetPerformanceTuningAnalysisResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]]

---


### DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsFleetPerformanceTuningAnalysisResultsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsFilter">DataOciJmsFleetPerformanceTuningAnalysisResultsFilter</a>]

---


### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationId">application_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationInstallationId">application_installation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationInstallationPath">application_installation_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.result">result</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.warningCount">warning_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_id`<sup>Required</sup> <a name="application_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationId"></a>

```python
application_id: str
```

- *Type:* str

---

##### `application_installation_id`<sup>Required</sup> <a name="application_installation_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationInstallationId"></a>

```python
application_installation_id: str
```

- *Type:* str

---

##### `application_installation_path`<sup>Required</sup> <a name="application_installation_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationInstallationPath"></a>

```python
application_installation_path: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `result`<sup>Required</sup> <a name="result" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.result"></a>

```python
result: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `warning_count`<sup>Required</sup> <a name="warning_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.warningCount"></a>

```python
warning_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItems</a>

---


### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference <a name="DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_performance_tuning_analysis_results

dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetPerformanceTuningAnalysisResults.DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection">DataOciJmsFleetPerformanceTuningAnalysisResultsPerformanceTuningAnalysisResultCollection</a>

---



