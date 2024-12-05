# `dataflowSqlEndpoint` Submodule <a name="`dataflowSqlEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataflowSqlEndpoint <a name="DataflowSqlEndpoint" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint oci_dataflow_sql_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpoint(
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
  display_name: str,
  driver_shape: str,
  executor_shape: str,
  max_executor_count: typing.Union[int, float],
  metastore_id: str,
  min_executor_count: typing.Union[int, float],
  network_configuration: DataflowSqlEndpointNetworkConfiguration,
  sql_endpoint_version: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  driver_shape_config: DataflowSqlEndpointDriverShapeConfig = None,
  executor_shape_config: DataflowSqlEndpointExecutorShapeConfig = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  spark_advanced_configurations: typing.Mapping[str] = None,
  state: str = None,
  timeouts: DataflowSqlEndpointTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.driverShape">driver_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.executorShape">executor_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.maxExecutorCount">max_executor_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.minExecutorCount">min_executor_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.sqlEndpointVersion">sql_endpoint_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.driverShapeConfig">driver_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.executorShapeConfig">executor_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.sparkAdvancedConfigurations">spark_advanced_configurations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}.

---

##### `driver_shape`<sup>Required</sup> <a name="driver_shape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.driverShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}.

---

##### `executor_shape`<sup>Required</sup> <a name="executor_shape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.executorShape"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}.

---

##### `max_executor_count`<sup>Required</sup> <a name="max_executor_count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.maxExecutorCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}.

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.metastoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}.

---

##### `min_executor_count`<sup>Required</sup> <a name="min_executor_count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.minExecutorCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}.

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.networkConfiguration"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_configuration DataflowSqlEndpoint#network_configuration}

---

##### `sql_endpoint_version`<sup>Required</sup> <a name="sql_endpoint_version" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.sqlEndpointVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}.

---

##### `driver_shape_config`<sup>Optional</sup> <a name="driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.driverShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape_config DataflowSqlEndpoint#driver_shape_config}

---

##### `executor_shape_config`<sup>Optional</sup> <a name="executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.executorShapeConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape_config DataflowSqlEndpoint#executor_shape_config}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spark_advanced_configurations`<sup>Optional</sup> <a name="spark_advanced_configurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.sparkAdvancedConfigurations"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#timeouts DataflowSqlEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putDriverShapeConfig">put_driver_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putExecutorShapeConfig">put_executor_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration">put_network_configuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDriverShapeConfig">reset_driver_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetExecutorShapeConfig">reset_executor_shape_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetSparkAdvancedConfigurations">reset_spark_advanced_configurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_driver_shape_config` <a name="put_driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putDriverShapeConfig"></a>

```python
def put_driver_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putDriverShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putDriverShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}.

---

##### `put_executor_shape_config` <a name="put_executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putExecutorShapeConfig"></a>

```python
def put_executor_shape_config(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
) -> None
```

###### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putExecutorShapeConfig.parameter.memoryInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}.

---

###### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putExecutorShapeConfig.parameter.ocpus"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}.

---

##### `put_network_configuration` <a name="put_network_configuration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration"></a>

```python
def put_network_configuration(
  network_type: str,
  access_control_rules: typing.Union[IResolvable, typing.List[DataflowSqlEndpointNetworkConfigurationAccessControlRules]] = None,
  host_name_prefix: str = None,
  subnet_id: str = None,
  vcn_id: str = None
) -> None
```

###### `network_type`<sup>Required</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration.parameter.networkType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_type DataflowSqlEndpoint#network_type}.

---

###### `access_control_rules`<sup>Optional</sup> <a name="access_control_rules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration.parameter.accessControlRules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>]]

access_control_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#access_control_rules DataflowSqlEndpoint#access_control_rules}

---

###### `host_name_prefix`<sup>Optional</sup> <a name="host_name_prefix" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration.parameter.hostNamePrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#host_name_prefix DataflowSqlEndpoint#host_name_prefix}.

---

###### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#subnet_id DataflowSqlEndpoint#subnet_id}.

---

###### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putNetworkConfiguration.parameter.vcnId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_id DataflowSqlEndpoint#vcn_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#create DataflowSqlEndpoint#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#delete DataflowSqlEndpoint#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#update DataflowSqlEndpoint#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_driver_shape_config` <a name="reset_driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetDriverShapeConfig"></a>

```python
def reset_driver_shape_config() -> None
```

##### `reset_executor_shape_config` <a name="reset_executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetExecutorShapeConfig"></a>

```python
def reset_executor_shape_config() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_spark_advanced_configurations` <a name="reset_spark_advanced_configurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetSparkAdvancedConfigurations"></a>

```python
def reset_spark_advanced_configurations() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataflowSqlEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpoint.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataflowSqlEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataflowSqlEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataflowSqlEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataflowSqlEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfig">driver_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference">DataflowSqlEndpointDriverShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfig">executor_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference">DataflowSqlEndpointExecutorShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.jdbcEndpointUrl">jdbc_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lakeId">lake_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference">DataflowSqlEndpointNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateMessage">state_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference">DataflowSqlEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.warehouseBucketUri">warehouse_bucket_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfigInput">driver_shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeInput">driver_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfigInput">executor_shape_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeInput">executor_shape_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCountInput">max_executor_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreIdInput">metastore_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCountInput">min_executor_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfigurationInput">network_configuration_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurationsInput">spark_advanced_configurations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersionInput">sql_endpoint_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShape">driver_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShape">executor_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCount">max_executor_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreId">metastore_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCount">min_executor_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurations">spark_advanced_configurations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersion">sql_endpoint_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `driver_shape_config`<sup>Required</sup> <a name="driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfig"></a>

```python
driver_shape_config: DataflowSqlEndpointDriverShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference">DataflowSqlEndpointDriverShapeConfigOutputReference</a>

---

##### `executor_shape_config`<sup>Required</sup> <a name="executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfig"></a>

```python
executor_shape_config: DataflowSqlEndpointExecutorShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference">DataflowSqlEndpointExecutorShapeConfigOutputReference</a>

---

##### `jdbc_endpoint_url`<sup>Required</sup> <a name="jdbc_endpoint_url" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.jdbcEndpointUrl"></a>

```python
jdbc_endpoint_url: str
```

- *Type:* str

---

##### `lake_id`<sup>Required</sup> <a name="lake_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.lakeId"></a>

```python
lake_id: str
```

- *Type:* str

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfiguration"></a>

```python
network_configuration: DataflowSqlEndpointNetworkConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference">DataflowSqlEndpointNetworkConfigurationOutputReference</a>

---

##### `state_message`<sup>Required</sup> <a name="state_message" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateMessage"></a>

```python
state_message: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeouts"></a>

```python
timeouts: DataflowSqlEndpointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference">DataflowSqlEndpointTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `warehouse_bucket_uri`<sup>Required</sup> <a name="warehouse_bucket_uri" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.warehouseBucketUri"></a>

```python
warehouse_bucket_uri: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `driver_shape_config_input`<sup>Optional</sup> <a name="driver_shape_config_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeConfigInput"></a>

```python
driver_shape_config_input: DataflowSqlEndpointDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

---

##### `driver_shape_input`<sup>Optional</sup> <a name="driver_shape_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShapeInput"></a>

```python
driver_shape_input: str
```

- *Type:* str

---

##### `executor_shape_config_input`<sup>Optional</sup> <a name="executor_shape_config_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeConfigInput"></a>

```python
executor_shape_config_input: DataflowSqlEndpointExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

---

##### `executor_shape_input`<sup>Optional</sup> <a name="executor_shape_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShapeInput"></a>

```python
executor_shape_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `max_executor_count_input`<sup>Optional</sup> <a name="max_executor_count_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCountInput"></a>

```python
max_executor_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metastore_id_input`<sup>Optional</sup> <a name="metastore_id_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreIdInput"></a>

```python
metastore_id_input: str
```

- *Type:* str

---

##### `min_executor_count_input`<sup>Optional</sup> <a name="min_executor_count_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCountInput"></a>

```python
min_executor_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_configuration_input`<sup>Optional</sup> <a name="network_configuration_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.networkConfigurationInput"></a>

```python
network_configuration_input: DataflowSqlEndpointNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

---

##### `spark_advanced_configurations_input`<sup>Optional</sup> <a name="spark_advanced_configurations_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurationsInput"></a>

```python
spark_advanced_configurations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sql_endpoint_version_input`<sup>Optional</sup> <a name="sql_endpoint_version_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersionInput"></a>

```python
sql_endpoint_version_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataflowSqlEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `driver_shape`<sup>Required</sup> <a name="driver_shape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.driverShape"></a>

```python
driver_shape: str
```

- *Type:* str

---

##### `executor_shape`<sup>Required</sup> <a name="executor_shape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.executorShape"></a>

```python
executor_shape: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `max_executor_count`<sup>Required</sup> <a name="max_executor_count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.maxExecutorCount"></a>

```python
max_executor_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

---

##### `min_executor_count`<sup>Required</sup> <a name="min_executor_count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.minExecutorCount"></a>

```python
min_executor_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spark_advanced_configurations`<sup>Required</sup> <a name="spark_advanced_configurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sparkAdvancedConfigurations"></a>

```python
spark_advanced_configurations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `sql_endpoint_version`<sup>Required</sup> <a name="sql_endpoint_version" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.sqlEndpointVersion"></a>

```python
sql_endpoint_version: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataflowSqlEndpointConfig <a name="DataflowSqlEndpointConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  driver_shape: str,
  executor_shape: str,
  max_executor_count: typing.Union[int, float],
  metastore_id: str,
  min_executor_count: typing.Union[int, float],
  network_configuration: DataflowSqlEndpointNetworkConfiguration,
  sql_endpoint_version: str,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  driver_shape_config: DataflowSqlEndpointDriverShapeConfig = None,
  executor_shape_config: DataflowSqlEndpointExecutorShapeConfig = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  spark_advanced_configurations: typing.Mapping[str] = None,
  state: str = None,
  timeouts: DataflowSqlEndpointTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShape">driver_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShape">executor_shape</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.maxExecutorCount">max_executor_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.metastoreId">metastore_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.minExecutorCount">min_executor_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.networkConfiguration">network_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sqlEndpointVersion">sql_endpoint_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShapeConfig">driver_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | driver_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShapeConfig">executor_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | executor_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sparkAdvancedConfigurations">spark_advanced_configurations</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#compartment_id DataflowSqlEndpoint#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#display_name DataflowSqlEndpoint#display_name}.

---

##### `driver_shape`<sup>Required</sup> <a name="driver_shape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShape"></a>

```python
driver_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape DataflowSqlEndpoint#driver_shape}.

---

##### `executor_shape`<sup>Required</sup> <a name="executor_shape" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShape"></a>

```python
executor_shape: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape DataflowSqlEndpoint#executor_shape}.

---

##### `max_executor_count`<sup>Required</sup> <a name="max_executor_count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.maxExecutorCount"></a>

```python
max_executor_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#max_executor_count DataflowSqlEndpoint#max_executor_count}.

---

##### `metastore_id`<sup>Required</sup> <a name="metastore_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.metastoreId"></a>

```python
metastore_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#metastore_id DataflowSqlEndpoint#metastore_id}.

---

##### `min_executor_count`<sup>Required</sup> <a name="min_executor_count" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.minExecutorCount"></a>

```python
min_executor_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#min_executor_count DataflowSqlEndpoint#min_executor_count}.

---

##### `network_configuration`<sup>Required</sup> <a name="network_configuration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.networkConfiguration"></a>

```python
network_configuration: DataflowSqlEndpointNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_configuration DataflowSqlEndpoint#network_configuration}

---

##### `sql_endpoint_version`<sup>Required</sup> <a name="sql_endpoint_version" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sqlEndpointVersion"></a>

```python
sql_endpoint_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#sql_endpoint_version DataflowSqlEndpoint#sql_endpoint_version}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#defined_tags DataflowSqlEndpoint#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#description DataflowSqlEndpoint#description}.

---

##### `driver_shape_config`<sup>Optional</sup> <a name="driver_shape_config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.driverShapeConfig"></a>

```python
driver_shape_config: DataflowSqlEndpointDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

driver_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#driver_shape_config DataflowSqlEndpoint#driver_shape_config}

---

##### `executor_shape_config`<sup>Optional</sup> <a name="executor_shape_config" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.executorShapeConfig"></a>

```python
executor_shape_config: DataflowSqlEndpointExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

executor_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#executor_shape_config DataflowSqlEndpoint#executor_shape_config}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#freeform_tags DataflowSqlEndpoint#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#id DataflowSqlEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `spark_advanced_configurations`<sup>Optional</sup> <a name="spark_advanced_configurations" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.sparkAdvancedConfigurations"></a>

```python
spark_advanced_configurations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#spark_advanced_configurations DataflowSqlEndpoint#spark_advanced_configurations}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#state DataflowSqlEndpoint#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointConfig.property.timeouts"></a>

```python
timeouts: DataflowSqlEndpointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#timeouts DataflowSqlEndpoint#timeouts}

---

### DataflowSqlEndpointDriverShapeConfig <a name="DataflowSqlEndpointDriverShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}.

---

### DataflowSqlEndpointExecutorShapeConfig <a name="DataflowSqlEndpointExecutorShapeConfig" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig(
  memory_in_gbs: typing.Union[int, float] = None,
  ocpus: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}. |

---

##### `memory_in_gbs`<sup>Optional</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#memory_in_gbs DataflowSqlEndpoint#memory_in_gbs}.

---

##### `ocpus`<sup>Optional</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ocpus DataflowSqlEndpoint#ocpus}.

---

### DataflowSqlEndpointNetworkConfiguration <a name="DataflowSqlEndpointNetworkConfiguration" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration(
  network_type: str,
  access_control_rules: typing.Union[IResolvable, typing.List[DataflowSqlEndpointNetworkConfigurationAccessControlRules]] = None,
  host_name_prefix: str = None,
  subnet_id: str = None,
  vcn_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.networkType">network_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_type DataflowSqlEndpoint#network_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.accessControlRules">access_control_rules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>]]</code> | access_control_rules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.hostNamePrefix">host_name_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#host_name_prefix DataflowSqlEndpoint#host_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#subnet_id DataflowSqlEndpoint#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.vcnId">vcn_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_id DataflowSqlEndpoint#vcn_id}. |

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#network_type DataflowSqlEndpoint#network_type}.

---

##### `access_control_rules`<sup>Optional</sup> <a name="access_control_rules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.accessControlRules"></a>

```python
access_control_rules: typing.Union[IResolvable, typing.List[DataflowSqlEndpointNetworkConfigurationAccessControlRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>]]

access_control_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#access_control_rules DataflowSqlEndpoint#access_control_rules}

---

##### `host_name_prefix`<sup>Optional</sup> <a name="host_name_prefix" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.hostNamePrefix"></a>

```python
host_name_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#host_name_prefix DataflowSqlEndpoint#host_name_prefix}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#subnet_id DataflowSqlEndpoint#subnet_id}.

---

##### `vcn_id`<sup>Optional</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_id DataflowSqlEndpoint#vcn_id}.

---

### DataflowSqlEndpointNetworkConfigurationAccessControlRules <a name="DataflowSqlEndpointNetworkConfigurationAccessControlRules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules(
  ip_notation: str = None,
  value: str = None,
  vcn_ips: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.ipNotation">ip_notation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ip_notation DataflowSqlEndpoint#ip_notation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#value DataflowSqlEndpoint#value}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.vcnIps">vcn_ips</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_ips DataflowSqlEndpoint#vcn_ips}. |

---

##### `ip_notation`<sup>Optional</sup> <a name="ip_notation" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.ipNotation"></a>

```python
ip_notation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#ip_notation DataflowSqlEndpoint#ip_notation}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#value DataflowSqlEndpoint#value}.

---

##### `vcn_ips`<sup>Optional</sup> <a name="vcn_ips" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules.property.vcnIps"></a>

```python
vcn_ips: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#vcn_ips DataflowSqlEndpoint#vcn_ips}.

---

### DataflowSqlEndpointTimeouts <a name="DataflowSqlEndpointTimeouts" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#create DataflowSqlEndpoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#delete DataflowSqlEndpoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#update DataflowSqlEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#create DataflowSqlEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#delete DataflowSqlEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/dataflow_sql_endpoint#update DataflowSqlEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataflowSqlEndpointDriverShapeConfigOutputReference <a name="DataflowSqlEndpointDriverShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataflowSqlEndpointDriverShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointDriverShapeConfig">DataflowSqlEndpointDriverShapeConfig</a>

---


### DataflowSqlEndpointExecutorShapeConfigOutputReference <a name="DataflowSqlEndpointExecutorShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetMemoryInGbs">reset_memory_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetOcpus">reset_ocpus</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_memory_in_gbs` <a name="reset_memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetMemoryInGbs"></a>

```python
def reset_memory_in_gbs() -> None
```

##### `reset_ocpus` <a name="reset_ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.resetOcpus"></a>

```python
def reset_ocpus() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbsInput">memory_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpusInput">ocpus_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs_input`<sup>Optional</sup> <a name="memory_in_gbs_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbsInput"></a>

```python
memory_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus_input`<sup>Optional</sup> <a name="ocpus_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpusInput"></a>

```python
ocpus_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataflowSqlEndpointExecutorShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointExecutorShapeConfig">DataflowSqlEndpointExecutorShapeConfig</a>

---


### DataflowSqlEndpointNetworkConfigurationAccessControlRulesList <a name="DataflowSqlEndpointNetworkConfigurationAccessControlRulesList" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataflowSqlEndpointNetworkConfigurationAccessControlRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>]]

---


### DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference <a name="DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetIpNotation">reset_ip_notation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetValue">reset_value</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetVcnIps">reset_vcn_ips</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_ip_notation` <a name="reset_ip_notation" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetIpNotation"></a>

```python
def reset_ip_notation() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetValue"></a>

```python
def reset_value() -> None
```

##### `reset_vcn_ips` <a name="reset_vcn_ips" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.resetVcnIps"></a>

```python
def reset_vcn_ips() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotationInput">ip_notation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIpsInput">vcn_ips_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotation">ip_notation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIps">vcn_ips</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ip_notation_input`<sup>Optional</sup> <a name="ip_notation_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotationInput"></a>

```python
ip_notation_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `vcn_ips_input`<sup>Optional</sup> <a name="vcn_ips_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIpsInput"></a>

```python
vcn_ips_input: str
```

- *Type:* str

---

##### `ip_notation`<sup>Required</sup> <a name="ip_notation" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.ipNotation"></a>

```python
ip_notation: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `vcn_ips`<sup>Required</sup> <a name="vcn_ips" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.vcnIps"></a>

```python
vcn_ips: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataflowSqlEndpointNetworkConfigurationAccessControlRules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>]

---


### DataflowSqlEndpointNetworkConfigurationOutputReference <a name="DataflowSqlEndpointNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.putAccessControlRules">put_access_control_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetAccessControlRules">reset_access_control_rules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetHostNamePrefix">reset_host_name_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetVcnId">reset_vcn_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_access_control_rules` <a name="put_access_control_rules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.putAccessControlRules"></a>

```python
def put_access_control_rules(
  value: typing.Union[IResolvable, typing.List[DataflowSqlEndpointNetworkConfigurationAccessControlRules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.putAccessControlRules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>]]

---

##### `reset_access_control_rules` <a name="reset_access_control_rules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetAccessControlRules"></a>

```python
def reset_access_control_rules() -> None
```

##### `reset_host_name_prefix` <a name="reset_host_name_prefix" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetHostNamePrefix"></a>

```python
def reset_host_name_prefix() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_vcn_id` <a name="reset_vcn_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.resetVcnId"></a>

```python
def reset_vcn_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRules">access_control_rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList">DataflowSqlEndpointNetworkConfigurationAccessControlRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.privateEndpointIp">private_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.publicEndpointIp">public_endpoint_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRulesInput">access_control_rules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefixInput">host_name_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkTypeInput">network_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnIdInput">vcn_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefix">host_name_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkType">network_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_control_rules`<sup>Required</sup> <a name="access_control_rules" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRules"></a>

```python
access_control_rules: DataflowSqlEndpointNetworkConfigurationAccessControlRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRulesList">DataflowSqlEndpointNetworkConfigurationAccessControlRulesList</a>

---

##### `private_endpoint_ip`<sup>Required</sup> <a name="private_endpoint_ip" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.privateEndpointIp"></a>

```python
private_endpoint_ip: str
```

- *Type:* str

---

##### `public_endpoint_ip`<sup>Required</sup> <a name="public_endpoint_ip" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.publicEndpointIp"></a>

```python
public_endpoint_ip: str
```

- *Type:* str

---

##### `access_control_rules_input`<sup>Optional</sup> <a name="access_control_rules_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.accessControlRulesInput"></a>

```python
access_control_rules_input: typing.Union[IResolvable, typing.List[DataflowSqlEndpointNetworkConfigurationAccessControlRules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationAccessControlRules">DataflowSqlEndpointNetworkConfigurationAccessControlRules</a>]]

---

##### `host_name_prefix_input`<sup>Optional</sup> <a name="host_name_prefix_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefixInput"></a>

```python
host_name_prefix_input: str
```

- *Type:* str

---

##### `network_type_input`<sup>Optional</sup> <a name="network_type_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkTypeInput"></a>

```python
network_type_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `vcn_id_input`<sup>Optional</sup> <a name="vcn_id_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnIdInput"></a>

```python
vcn_id_input: str
```

- *Type:* str

---

##### `host_name_prefix`<sup>Required</sup> <a name="host_name_prefix" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.hostNamePrefix"></a>

```python
host_name_prefix: str
```

- *Type:* str

---

##### `network_type`<sup>Required</sup> <a name="network_type" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.networkType"></a>

```python
network_type: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataflowSqlEndpointNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointNetworkConfiguration">DataflowSqlEndpointNetworkConfiguration</a>

---


### DataflowSqlEndpointTimeoutsOutputReference <a name="DataflowSqlEndpointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import dataflow_sql_endpoint

dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataflowSqlEndpointTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataflowSqlEndpoint.DataflowSqlEndpointTimeouts">DataflowSqlEndpointTimeouts</a>]

---



