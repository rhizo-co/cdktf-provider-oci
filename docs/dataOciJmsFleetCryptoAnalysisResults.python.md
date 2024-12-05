# `dataOciJmsFleetCryptoAnalysisResults` Submodule <a name="`dataOciJmsFleetCryptoAnalysisResults` Submodule" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciJmsFleetCryptoAnalysisResults <a name="DataOciJmsFleetCryptoAnalysisResults" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results oci_jms_fleet_crypto_analysis_results}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults(
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
  aggregation_mode: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetCryptoAnalysisResultsFilter]] = None,
  finding_count: typing.Union[int, float] = None,
  finding_count_greater_than: typing.Union[int, float] = None,
  host_name: str = None,
  id: str = None,
  managed_instance_id: str = None,
  non_compliant_finding_count: typing.Union[int, float] = None,
  non_compliant_finding_count_greater_than: typing.Union[int, float] = None,
  time_end: str = None,
  time_start: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#fleet_id DataOciJmsFleetCryptoAnalysisResults#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.aggregationMode">aggregation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#aggregation_mode DataOciJmsFleetCryptoAnalysisResults#aggregation_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.findingCount">finding_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count DataOciJmsFleetCryptoAnalysisResults#finding_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.findingCountGreaterThan">finding_count_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#finding_count_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#host_name DataOciJmsFleetCryptoAnalysisResults#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#id DataOciJmsFleetCryptoAnalysisResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#managed_instance_id DataOciJmsFleetCryptoAnalysisResults#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.nonCompliantFindingCount">non_compliant_finding_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.nonCompliantFindingCountGreaterThan">non_compliant_finding_count_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_end DataOciJmsFleetCryptoAnalysisResults#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_start DataOciJmsFleetCryptoAnalysisResults#time_start}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.fleetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#fleet_id DataOciJmsFleetCryptoAnalysisResults#fleet_id}.

---

##### `aggregation_mode`<sup>Optional</sup> <a name="aggregation_mode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.aggregationMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#aggregation_mode DataOciJmsFleetCryptoAnalysisResults#aggregation_mode}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#filter DataOciJmsFleetCryptoAnalysisResults#filter}

---

##### `finding_count`<sup>Optional</sup> <a name="finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.findingCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count DataOciJmsFleetCryptoAnalysisResults#finding_count}.

---

##### `finding_count_greater_than`<sup>Optional</sup> <a name="finding_count_greater_than" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.findingCountGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#finding_count_greater_than}.

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.hostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#host_name DataOciJmsFleetCryptoAnalysisResults#host_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#id DataOciJmsFleetCryptoAnalysisResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#managed_instance_id DataOciJmsFleetCryptoAnalysisResults#managed_instance_id}.

---

##### `non_compliant_finding_count`<sup>Optional</sup> <a name="non_compliant_finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.nonCompliantFindingCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count}.

---

##### `non_compliant_finding_count_greater_than`<sup>Optional</sup> <a name="non_compliant_finding_count_greater_than" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.nonCompliantFindingCountGreaterThan"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count_greater_than}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.timeEnd"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_end DataOciJmsFleetCryptoAnalysisResults#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.Initializer.parameter.timeStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_start DataOciJmsFleetCryptoAnalysisResults#time_start}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetAggregationMode">reset_aggregation_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFindingCount">reset_finding_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFindingCountGreaterThan">reset_finding_count_greater_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetManagedInstanceId">reset_managed_instance_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetNonCompliantFindingCount">reset_non_compliant_finding_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetNonCompliantFindingCountGreaterThan">reset_non_compliant_finding_count_greater_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetTimeEnd">reset_time_end</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetTimeStart">reset_time_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciJmsFleetCryptoAnalysisResultsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]]

---

##### `reset_aggregation_mode` <a name="reset_aggregation_mode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetAggregationMode"></a>

```python
def reset_aggregation_mode() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_finding_count` <a name="reset_finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFindingCount"></a>

```python
def reset_finding_count() -> None
```

##### `reset_finding_count_greater_than` <a name="reset_finding_count_greater_than" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetFindingCountGreaterThan"></a>

```python
def reset_finding_count_greater_than() -> None
```

##### `reset_host_name` <a name="reset_host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_managed_instance_id` <a name="reset_managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetManagedInstanceId"></a>

```python
def reset_managed_instance_id() -> None
```

##### `reset_non_compliant_finding_count` <a name="reset_non_compliant_finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetNonCompliantFindingCount"></a>

```python
def reset_non_compliant_finding_count() -> None
```

##### `reset_non_compliant_finding_count_greater_than` <a name="reset_non_compliant_finding_count_greater_than" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetNonCompliantFindingCountGreaterThan"></a>

```python
def reset_non_compliant_finding_count_greater_than() -> None
```

##### `reset_time_end` <a name="reset_time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetTimeEnd"></a>

```python
def reset_time_end() -> None
```

##### `reset_time_start` <a name="reset_time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.resetTimeStart"></a>

```python
def reset_time_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResults resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciJmsFleetCryptoAnalysisResults resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciJmsFleetCryptoAnalysisResults to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciJmsFleetCryptoAnalysisResults that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciJmsFleetCryptoAnalysisResults to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.cryptoAnalysisResultCollection">crypto_analysis_result_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList">DataOciJmsFleetCryptoAnalysisResultsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.aggregationModeInput">aggregation_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountGreaterThanInput">finding_count_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountInput">finding_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fleetIdInput">fleet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountGreaterThanInput">non_compliant_finding_count_greater_than_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountInput">non_compliant_finding_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeEndInput">time_end_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeStartInput">time_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.aggregationMode">aggregation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCount">finding_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountGreaterThan">finding_count_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCount">non_compliant_finding_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountGreaterThan">non_compliant_finding_count_greater_than</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `crypto_analysis_result_collection`<sup>Required</sup> <a name="crypto_analysis_result_collection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.cryptoAnalysisResultCollection"></a>

```python
crypto_analysis_result_collection: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.filter"></a>

```python
filter: DataOciJmsFleetCryptoAnalysisResultsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList">DataOciJmsFleetCryptoAnalysisResultsFilterList</a>

---

##### `aggregation_mode_input`<sup>Optional</sup> <a name="aggregation_mode_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.aggregationModeInput"></a>

```python
aggregation_mode_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciJmsFleetCryptoAnalysisResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]]

---

##### `finding_count_greater_than_input`<sup>Optional</sup> <a name="finding_count_greater_than_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountGreaterThanInput"></a>

```python
finding_count_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `finding_count_input`<sup>Optional</sup> <a name="finding_count_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountInput"></a>

```python
finding_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fleet_id_input`<sup>Optional</sup> <a name="fleet_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fleetIdInput"></a>

```python
fleet_id_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `non_compliant_finding_count_greater_than_input`<sup>Optional</sup> <a name="non_compliant_finding_count_greater_than_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountGreaterThanInput"></a>

```python
non_compliant_finding_count_greater_than_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `non_compliant_finding_count_input`<sup>Optional</sup> <a name="non_compliant_finding_count_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountInput"></a>

```python
non_compliant_finding_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_end_input`<sup>Optional</sup> <a name="time_end_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeEndInput"></a>

```python
time_end_input: str
```

- *Type:* str

---

##### `time_start_input`<sup>Optional</sup> <a name="time_start_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeStartInput"></a>

```python
time_start_input: str
```

- *Type:* str

---

##### `aggregation_mode`<sup>Required</sup> <a name="aggregation_mode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.aggregationMode"></a>

```python
aggregation_mode: str
```

- *Type:* str

---

##### `finding_count`<sup>Required</sup> <a name="finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCount"></a>

```python
finding_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `finding_count_greater_than`<sup>Required</sup> <a name="finding_count_greater_than" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.findingCountGreaterThan"></a>

```python
finding_count_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `non_compliant_finding_count`<sup>Required</sup> <a name="non_compliant_finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCount"></a>

```python
non_compliant_finding_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `non_compliant_finding_count_greater_than`<sup>Required</sup> <a name="non_compliant_finding_count_greater_than" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.nonCompliantFindingCountGreaterThan"></a>

```python
non_compliant_finding_count_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResults.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciJmsFleetCryptoAnalysisResultsConfig <a name="DataOciJmsFleetCryptoAnalysisResultsConfig" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  fleet_id: str,
  aggregation_mode: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetCryptoAnalysisResultsFilter]] = None,
  finding_count: typing.Union[int, float] = None,
  finding_count_greater_than: typing.Union[int, float] = None,
  host_name: str = None,
  id: str = None,
  managed_instance_id: str = None,
  non_compliant_finding_count: typing.Union[int, float] = None,
  non_compliant_finding_count_greater_than: typing.Union[int, float] = None,
  time_end: str = None,
  time_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.fleetId">fleet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#fleet_id DataOciJmsFleetCryptoAnalysisResults#fleet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.aggregationMode">aggregation_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#aggregation_mode DataOciJmsFleetCryptoAnalysisResults#aggregation_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.findingCount">finding_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count DataOciJmsFleetCryptoAnalysisResults#finding_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.findingCountGreaterThan">finding_count_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#finding_count_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#host_name DataOciJmsFleetCryptoAnalysisResults#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#id DataOciJmsFleetCryptoAnalysisResults#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#managed_instance_id DataOciJmsFleetCryptoAnalysisResults#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.nonCompliantFindingCount">non_compliant_finding_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.nonCompliantFindingCountGreaterThan">non_compliant_finding_count_greater_than</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count_greater_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.timeEnd">time_end</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_end DataOciJmsFleetCryptoAnalysisResults#time_end}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.timeStart">time_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_start DataOciJmsFleetCryptoAnalysisResults#time_start}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#fleet_id DataOciJmsFleetCryptoAnalysisResults#fleet_id}.

---

##### `aggregation_mode`<sup>Optional</sup> <a name="aggregation_mode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.aggregationMode"></a>

```python
aggregation_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#aggregation_mode DataOciJmsFleetCryptoAnalysisResults#aggregation_mode}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciJmsFleetCryptoAnalysisResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#filter DataOciJmsFleetCryptoAnalysisResults#filter}

---

##### `finding_count`<sup>Optional</sup> <a name="finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.findingCount"></a>

```python
finding_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count DataOciJmsFleetCryptoAnalysisResults#finding_count}.

---

##### `finding_count_greater_than`<sup>Optional</sup> <a name="finding_count_greater_than" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.findingCountGreaterThan"></a>

```python
finding_count_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#finding_count_greater_than}.

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#host_name DataOciJmsFleetCryptoAnalysisResults#host_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#id DataOciJmsFleetCryptoAnalysisResults#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed_instance_id`<sup>Optional</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#managed_instance_id DataOciJmsFleetCryptoAnalysisResults#managed_instance_id}.

---

##### `non_compliant_finding_count`<sup>Optional</sup> <a name="non_compliant_finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.nonCompliantFindingCount"></a>

```python
non_compliant_finding_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count}.

---

##### `non_compliant_finding_count_greater_than`<sup>Optional</sup> <a name="non_compliant_finding_count_greater_than" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.nonCompliantFindingCountGreaterThan"></a>

```python
non_compliant_finding_count_greater_than: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#non_compliant_finding_count_greater_than DataOciJmsFleetCryptoAnalysisResults#non_compliant_finding_count_greater_than}.

---

##### `time_end`<sup>Optional</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_end DataOciJmsFleetCryptoAnalysisResults#time_end}.

---

##### `time_start`<sup>Optional</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsConfig.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#time_start DataOciJmsFleetCryptoAnalysisResults#time_start}.

---

### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection()
```


### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems()
```


### DataOciJmsFleetCryptoAnalysisResultsFilter <a name="DataOciJmsFleetCryptoAnalysisResultsFilter" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#name DataOciJmsFleetCryptoAnalysisResults#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#values DataOciJmsFleetCryptoAnalysisResults#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#regex DataOciJmsFleetCryptoAnalysisResults#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#name DataOciJmsFleetCryptoAnalysisResults#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#values DataOciJmsFleetCryptoAnalysisResults#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/jms_fleet_crypto_analysis_results#regex DataOciJmsFleetCryptoAnalysisResults#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.aggregationMode">aggregation_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.cryptoRoadmapVersion">crypto_roadmap_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.findingCount">finding_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.fleetId">fleet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.nonCompliantFindingCount">non_compliant_finding_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.summarizedEventCount">summarized_event_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeFinished">time_finished</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeFirstEvent">time_first_event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeLastEvent">time_last_event</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.totalEventCount">total_event_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `aggregation_mode`<sup>Required</sup> <a name="aggregation_mode" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.aggregationMode"></a>

```python
aggregation_mode: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `crypto_roadmap_version`<sup>Required</sup> <a name="crypto_roadmap_version" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.cryptoRoadmapVersion"></a>

```python
crypto_roadmap_version: str
```

- *Type:* str

---

##### `finding_count`<sup>Required</sup> <a name="finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.findingCount"></a>

```python
finding_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fleet_id`<sup>Required</sup> <a name="fleet_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.fleetId"></a>

```python
fleet_id: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `non_compliant_finding_count`<sup>Required</sup> <a name="non_compliant_finding_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.nonCompliantFindingCount"></a>

```python
non_compliant_finding_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `summarized_event_count`<sup>Required</sup> <a name="summarized_event_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.summarizedEventCount"></a>

```python
summarized_event_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_finished`<sup>Required</sup> <a name="time_finished" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeFinished"></a>

```python
time_finished: str
```

- *Type:* str

---

##### `time_first_event`<sup>Required</sup> <a name="time_first_event" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeFirstEvent"></a>

```python
time_first_event: str
```

- *Type:* str

---

##### `time_last_event`<sup>Required</sup> <a name="time_last_event" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeLastEvent"></a>

```python
time_last_event: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `total_event_count`<sup>Required</sup> <a name="total_event_count" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.totalEventCount"></a>

```python
total_event_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItems</a>

---


### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference <a name="DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.items"></a>

```python
items: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection">DataOciJmsFleetCryptoAnalysisResultsCryptoAnalysisResultCollection</a>

---


### DataOciJmsFleetCryptoAnalysisResultsFilterList <a name="DataOciJmsFleetCryptoAnalysisResultsFilterList" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciJmsFleetCryptoAnalysisResultsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]]

---


### DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference <a name="DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_jms_fleet_crypto_analysis_results

dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciJmsFleetCryptoAnalysisResultsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciJmsFleetCryptoAnalysisResults.DataOciJmsFleetCryptoAnalysisResultsFilter">DataOciJmsFleetCryptoAnalysisResultsFilter</a>]

---



