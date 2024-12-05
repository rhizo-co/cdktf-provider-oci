# `dataOciJmsFleetJavaMigrationAnalysisResults` Submodule <a name="`dataOciJmsFleetJavaMigrationAnalysisResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetJavaMigrationAnalysisResults <a name="DataOciJmsFleetJavaMigrationAnalysisResults" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results oci_jms_fleet_java_migration_analysis_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults(
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
  application_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetJavaMigrationAnalysisResultsFilter]] = None,
  host_name: str = None,
  id: str = None,
  managed_instance_id: str = None,
  time_end: str = None,
  time_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#fleet_id DataOciJmsFleetJavaMigrationAnalysisResults#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.applicationName">application_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#application_name DataOciJmsFleetJavaMigrationAnalysisResults#application_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#host_name DataOciJmsFleetJavaMigrationAnalysisResults#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#id DataOciJmsFleetJavaMigrationAnalysisResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#managed_instance_id DataOciJmsFleetJavaMigrationAnalysisResults#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_end DataOciJmsFleetJavaMigrationAnalysisResults#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_start DataOciJmsFleetJavaMigrationAnalysisResults#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#fleet_id DataOciJmsFleetJavaMigrationAnalysisResults#fleet_id}.

---

##### `application_name`<sup>Optional</sup> <a name="application_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.applicationName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#application_name DataOciJmsFleetJavaMigrationAnalysisResults#application_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#filter DataOciJmsFleetJavaMigrationAnalysisResults#filter}

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.hostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#host_name DataOciJmsFleetJavaMigrationAnalysisResults#host_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#id DataOciJmsFleetJavaMigrationAnalysisResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#managed_instance_id DataOciJmsFleetJavaMigrationAnalysisResults#managed_instance_id}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.timeEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_end DataOciJmsFleetJavaMigrationAnalysisResults#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.Initializer.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_start DataOciJmsFleetJavaMigrationAnalysisResults#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetApplicationName">reset_application_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetManagedInstanceId">reset_managed_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetTimeEnd">reset_time_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetTimeStart">reset_time_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsFleetJavaMigrationAnalysisResultsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]]

---

##### `reset_application_name` <a name="reset_application_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetApplicationName"></a>

```python
def reset_application_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_host_name` <a name="reset_host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_instance_id` <a name="reset_managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetManagedInstanceId"></a>

```python
def reset_managed_instance_id() -> None
```

##### `reset_time_end` <a name="reset_time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetTimeEnd"></a>

```python
def reset_time_end() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsFleetJavaMigrationAnalysisResults resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsFleetJavaMigrationAnalysisResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsFleetJavaMigrationAnalysisResults to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsFleetJavaMigrationAnalysisResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetJavaMigrationAnalysisResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList">DataOciJmsFleetJavaMigrationAnalysisResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.javaMigrationAnalysisResultCollection">java_migration_analysis_result_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.applicationNameInput">application_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeEndInput">time_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.filter"></a>

```python
filter: DataOciJmsFleetJavaMigrationAnalysisResultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList">DataOciJmsFleetJavaMigrationAnalysisResultsFilterList</a>

---

##### `java_migration_analysis_result_collection`<sup>Required</sup> <a name="java_migration_analysis_result_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.javaMigrationAnalysisResultCollection"></a>

```python
java_migration_analysis_result_collection: DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList</a>

---

##### `application_name_input`<sup>Optional</sup> <a name="application_name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.applicationNameInput"></a>

```python
application_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsFleetJavaMigrationAnalysisResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]]

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `time_end_input`<sup>Optional</sup> <a name="time_end_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeEndInput"></a>

```python
time_end_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResults.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetJavaMigrationAnalysisResultsConfig <a name="DataOciJmsFleetJavaMigrationAnalysisResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  application_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetJavaMigrationAnalysisResultsFilter]] = None,
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
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#fleet_id DataOciJmsFleetJavaMigrationAnalysisResults#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.applicationName">application_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#application_name DataOciJmsFleetJavaMigrationAnalysisResults#application_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#host_name DataOciJmsFleetJavaMigrationAnalysisResults#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#id DataOciJmsFleetJavaMigrationAnalysisResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#managed_instance_id DataOciJmsFleetJavaMigrationAnalysisResults#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_end DataOciJmsFleetJavaMigrationAnalysisResults#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_start DataOciJmsFleetJavaMigrationAnalysisResults#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#fleet_id DataOciJmsFleetJavaMigrationAnalysisResults#fleet_id}.

---

##### `application_name`<sup>Optional</sup> <a name="application_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#application_name DataOciJmsFleetJavaMigrationAnalysisResults#application_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetJavaMigrationAnalysisResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#filter DataOciJmsFleetJavaMigrationAnalysisResults#filter}

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#host_name DataOciJmsFleetJavaMigrationAnalysisResults#host_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#id DataOciJmsFleetJavaMigrationAnalysisResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#managed_instance_id DataOciJmsFleetJavaMigrationAnalysisResults#managed_instance_id}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_end DataOciJmsFleetJavaMigrationAnalysisResults#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsConfig.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#time_start DataOciJmsFleetJavaMigrationAnalysisResults#time_start}.

---

### DataOciJmsFleetJavaMigrationAnalysisResultsFilter <a name="DataOciJmsFleetJavaMigrationAnalysisResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#name DataOciJmsFleetJavaMigrationAnalysisResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#values DataOciJmsFleetJavaMigrationAnalysisResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#regex DataOciJmsFleetJavaMigrationAnalysisResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#name DataOciJmsFleetJavaMigrationAnalysisResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#values DataOciJmsFleetJavaMigrationAnalysisResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_java_migration_analysis_results#regex DataOciJmsFleetJavaMigrationAnalysisResults#regex}.

---

### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection()
```


### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetJavaMigrationAnalysisResultsFilterList <a name="DataOciJmsFleetJavaMigrationAnalysisResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsFleetJavaMigrationAnalysisResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]]

---


### DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference <a name="DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsFleetJavaMigrationAnalysisResultsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsFilter">DataOciJmsFleetJavaMigrationAnalysisResultsFilter</a>]

---


### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationExecutionType">application_execution_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationKey">application_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationName">application_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationPath">application_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.objectList">object_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.objectStorageUploadDirPath">object_storage_upload_dir_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.sourceJdkVersion">source_jdk_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.targetJdkVersion">target_jdk_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `application_execution_type`<sup>Required</sup> <a name="application_execution_type" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationExecutionType"></a>

```python
application_execution_type: str
```

- *Type:* str

---

##### `application_key`<sup>Required</sup> <a name="application_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationKey"></a>

```python
application_key: str
```

- *Type:* str

---

##### `application_name`<sup>Required</sup> <a name="application_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationName"></a>

```python
application_name: str
```

- *Type:* str

---

##### `application_path`<sup>Required</sup> <a name="application_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.applicationPath"></a>

```python
application_path: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object_list`<sup>Required</sup> <a name="object_list" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.objectList"></a>

```python
object_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `object_storage_upload_dir_path`<sup>Required</sup> <a name="object_storage_upload_dir_path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.objectStorageUploadDirPath"></a>

```python
object_storage_upload_dir_path: str
```

- *Type:* str

---

##### `source_jdk_version`<sup>Required</sup> <a name="source_jdk_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.sourceJdkVersion"></a>

```python
source_jdk_version: str
```

- *Type:* str

---

##### `target_jdk_version`<sup>Required</sup> <a name="target_jdk_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.targetJdkVersion"></a>

```python
target_jdk_version: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItems</a>

---


### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference <a name="DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_java_migration_analysis_results

dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetJavaMigrationAnalysisResults.DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection">DataOciJmsFleetJavaMigrationAnalysisResultsJavaMigrationAnalysisResultCollection</a>

---



