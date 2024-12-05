# `managementAgentManagementAgentDataSource` Submodule <a name="`managementAgentManagementAgentDataSource` Submodule" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementAgentManagementAgentDataSource <a name="ManagementAgentManagementAgentDataSource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source oci_management_agent_management_agent_data_source}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource(
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
  management_agent_id: str,
  name: str,
  type: str,
  url: str,
  allow_metrics: str = None,
  connection_timeout: typing.Union[int, float] = None,
  id: str = None,
  metric_dimensions: typing.Union[IResolvable, typing.List[ManagementAgentManagementAgentDataSourceMetricDimensions]] = None,
  namespace: str = None,
  proxy_url: str = None,
  read_data_limit_in_kilobytes: typing.Union[int, float] = None,
  read_timeout: typing.Union[int, float] = None,
  resource_group: str = None,
  schedule_mins: typing.Union[int, float] = None,
  timeouts: ManagementAgentManagementAgentDataSourceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.allowMetrics">allow_metrics</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.metricDimensions">metric_dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]]</code> | metric_dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.proxyUrl">proxy_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.readDataLimitInKilobytes">read_data_limit_in_kilobytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.readTimeout">read_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.scheduleMins">schedule_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}.

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.managementAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}.

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.url"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}.

---

##### `allow_metrics`<sup>Optional</sup> <a name="allow_metrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.allowMetrics"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}.

---

##### `connection_timeout`<sup>Optional</sup> <a name="connection_timeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.connectionTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric_dimensions`<sup>Optional</sup> <a name="metric_dimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.metricDimensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]]

metric_dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#metric_dimensions ManagementAgentManagementAgentDataSource#metric_dimensions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}.

---

##### `proxy_url`<sup>Optional</sup> <a name="proxy_url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.proxyUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}.

---

##### `read_data_limit_in_kilobytes`<sup>Optional</sup> <a name="read_data_limit_in_kilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.readDataLimitInKilobytes"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}.

---

##### `read_timeout`<sup>Optional</sup> <a name="read_timeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.readTimeout"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.resourceGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}.

---

##### `schedule_mins`<sup>Optional</sup> <a name="schedule_mins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.scheduleMins"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#timeouts ManagementAgentManagementAgentDataSource#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putMetricDimensions">put_metric_dimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetAllowMetrics">reset_allow_metrics</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetConnectionTimeout">reset_connection_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetMetricDimensions">reset_metric_dimensions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetProxyUrl">reset_proxy_url</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadDataLimitInKilobytes">reset_read_data_limit_in_kilobytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadTimeout">reset_read_timeout</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetScheduleMins">reset_schedule_mins</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_metric_dimensions` <a name="put_metric_dimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putMetricDimensions"></a>

```python
def put_metric_dimensions(
  value: typing.Union[IResolvable, typing.List[ManagementAgentManagementAgentDataSourceMetricDimensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putMetricDimensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#create ManagementAgentManagementAgentDataSource#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#delete ManagementAgentManagementAgentDataSource#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#update ManagementAgentManagementAgentDataSource#update}.

---

##### `reset_allow_metrics` <a name="reset_allow_metrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetAllowMetrics"></a>

```python
def reset_allow_metrics() -> None
```

##### `reset_connection_timeout` <a name="reset_connection_timeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetConnectionTimeout"></a>

```python
def reset_connection_timeout() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metric_dimensions` <a name="reset_metric_dimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetMetricDimensions"></a>

```python
def reset_metric_dimensions() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_proxy_url` <a name="reset_proxy_url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetProxyUrl"></a>

```python
def reset_proxy_url() -> None
```

##### `reset_read_data_limit_in_kilobytes` <a name="reset_read_data_limit_in_kilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadDataLimitInKilobytes"></a>

```python
def reset_read_data_limit_in_kilobytes() -> None
```

##### `reset_read_timeout` <a name="reset_read_timeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetReadTimeout"></a>

```python
def reset_read_timeout() -> None
```

##### `reset_resource_group` <a name="reset_resource_group" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_schedule_mins` <a name="reset_schedule_mins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetScheduleMins"></a>

```python
def reset_schedule_mins() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagementAgentManagementAgentDataSource resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagementAgentManagementAgentDataSource to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagementAgentManagementAgentDataSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagementAgentManagementAgentDataSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dataSourceKey">data_source_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.isDaemonSet">is_daemon_set</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensions">metric_dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList">ManagementAgentManagementAgentDataSourceMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimit">read_data_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference">ManagementAgentManagementAgentDataSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetricsInput">allow_metrics_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeoutInput">connection_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentIdInput">management_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensionsInput">metric_dimensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrlInput">proxy_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytesInput">read_data_limit_in_kilobytes_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeoutInput">read_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMinsInput">schedule_mins_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetrics">allow_metrics</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrl">proxy_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytes">read_data_limit_in_kilobytes</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeout">read_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMins">schedule_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.url">url</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `data_source_key`<sup>Required</sup> <a name="data_source_key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.dataSourceKey"></a>

```python
data_source_key: str
```

- *Type:* str

---

##### `is_daemon_set`<sup>Required</sup> <a name="is_daemon_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.isDaemonSet"></a>

```python
is_daemon_set: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `metric_dimensions`<sup>Required</sup> <a name="metric_dimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensions"></a>

```python
metric_dimensions: ManagementAgentManagementAgentDataSourceMetricDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList">ManagementAgentManagementAgentDataSourceMetricDimensionsList</a>

---

##### `read_data_limit`<sup>Required</sup> <a name="read_data_limit" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimit"></a>

```python
read_data_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeouts"></a>

```python
timeouts: ManagementAgentManagementAgentDataSourceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference">ManagementAgentManagementAgentDataSourceTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `allow_metrics_input`<sup>Optional</sup> <a name="allow_metrics_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetricsInput"></a>

```python
allow_metrics_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `connection_timeout_input`<sup>Optional</sup> <a name="connection_timeout_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeoutInput"></a>

```python
connection_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `management_agent_id_input`<sup>Optional</sup> <a name="management_agent_id_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentIdInput"></a>

```python
management_agent_id_input: str
```

- *Type:* str

---

##### `metric_dimensions_input`<sup>Optional</sup> <a name="metric_dimensions_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.metricDimensionsInput"></a>

```python
metric_dimensions_input: typing.Union[IResolvable, typing.List[ManagementAgentManagementAgentDataSourceMetricDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]]

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `proxy_url_input`<sup>Optional</sup> <a name="proxy_url_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrlInput"></a>

```python
proxy_url_input: str
```

- *Type:* str

---

##### `read_data_limit_in_kilobytes_input`<sup>Optional</sup> <a name="read_data_limit_in_kilobytes_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytesInput"></a>

```python
read_data_limit_in_kilobytes_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_timeout_input`<sup>Optional</sup> <a name="read_timeout_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeoutInput"></a>

```python
read_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `schedule_mins_input`<sup>Optional</sup> <a name="schedule_mins_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMinsInput"></a>

```python
schedule_mins_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ManagementAgentManagementAgentDataSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `allow_metrics`<sup>Required</sup> <a name="allow_metrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.allowMetrics"></a>

```python
allow_metrics: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_timeout`<sup>Required</sup> <a name="connection_timeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `proxy_url`<sup>Required</sup> <a name="proxy_url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

---

##### `read_data_limit_in_kilobytes`<sup>Required</sup> <a name="read_data_limit_in_kilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readDataLimitInKilobytes"></a>

```python
read_data_limit_in_kilobytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `read_timeout`<sup>Required</sup> <a name="read_timeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.readTimeout"></a>

```python
read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `schedule_mins`<sup>Required</sup> <a name="schedule_mins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.scheduleMins"></a>

```python
schedule_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.url"></a>

```python
url: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSource.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementAgentManagementAgentDataSourceConfig <a name="ManagementAgentManagementAgentDataSourceConfig" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  management_agent_id: str,
  name: str,
  type: str,
  url: str,
  allow_metrics: str = None,
  connection_timeout: typing.Union[int, float] = None,
  id: str = None,
  metric_dimensions: typing.Union[IResolvable, typing.List[ManagementAgentManagementAgentDataSourceMetricDimensions]] = None,
  namespace: str = None,
  proxy_url: str = None,
  read_data_limit_in_kilobytes: typing.Union[int, float] = None,
  read_timeout: typing.Union[int, float] = None,
  resource_group: str = None,
  schedule_mins: typing.Union[int, float] = None,
  timeouts: ManagementAgentManagementAgentDataSourceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.allowMetrics">allow_metrics</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connectionTimeout">connection_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.metricDimensions">metric_dimensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]]</code> | metric_dimensions block. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.proxyUrl">proxy_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readDataLimitInKilobytes">read_data_limit_in_kilobytes</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readTimeout">read_timeout</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.scheduleMins">schedule_mins</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#compartment_id ManagementAgentManagementAgentDataSource#compartment_id}.

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#management_agent_id ManagementAgentManagementAgentDataSource#management_agent_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#type ManagementAgentManagementAgentDataSource#type}.

---

##### `url`<sup>Required</sup> <a name="url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#url ManagementAgentManagementAgentDataSource#url}.

---

##### `allow_metrics`<sup>Optional</sup> <a name="allow_metrics" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.allowMetrics"></a>

```python
allow_metrics: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#allow_metrics ManagementAgentManagementAgentDataSource#allow_metrics}.

---

##### `connection_timeout`<sup>Optional</sup> <a name="connection_timeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.connectionTimeout"></a>

```python
connection_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#connection_timeout ManagementAgentManagementAgentDataSource#connection_timeout}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#id ManagementAgentManagementAgentDataSource#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metric_dimensions`<sup>Optional</sup> <a name="metric_dimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.metricDimensions"></a>

```python
metric_dimensions: typing.Union[IResolvable, typing.List[ManagementAgentManagementAgentDataSourceMetricDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]]

metric_dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#metric_dimensions ManagementAgentManagementAgentDataSource#metric_dimensions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#namespace ManagementAgentManagementAgentDataSource#namespace}.

---

##### `proxy_url`<sup>Optional</sup> <a name="proxy_url" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.proxyUrl"></a>

```python
proxy_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#proxy_url ManagementAgentManagementAgentDataSource#proxy_url}.

---

##### `read_data_limit_in_kilobytes`<sup>Optional</sup> <a name="read_data_limit_in_kilobytes" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readDataLimitInKilobytes"></a>

```python
read_data_limit_in_kilobytes: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_data_limit_in_kilobytes ManagementAgentManagementAgentDataSource#read_data_limit_in_kilobytes}.

---

##### `read_timeout`<sup>Optional</sup> <a name="read_timeout" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.readTimeout"></a>

```python
read_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#read_timeout ManagementAgentManagementAgentDataSource#read_timeout}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#resource_group ManagementAgentManagementAgentDataSource#resource_group}.

---

##### `schedule_mins`<sup>Optional</sup> <a name="schedule_mins" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.scheduleMins"></a>

```python
schedule_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#schedule_mins ManagementAgentManagementAgentDataSource#schedule_mins}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceConfig.property.timeouts"></a>

```python
timeouts: ManagementAgentManagementAgentDataSourceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#timeouts ManagementAgentManagementAgentDataSource#timeouts}

---

### ManagementAgentManagementAgentDataSourceMetricDimensions <a name="ManagementAgentManagementAgentDataSourceMetricDimensions" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions(
  name: str,
  value: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#value ManagementAgentManagementAgentDataSource#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#name ManagementAgentManagementAgentDataSource#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#value ManagementAgentManagementAgentDataSource#value}.

---

### ManagementAgentManagementAgentDataSourceTimeouts <a name="ManagementAgentManagementAgentDataSourceTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#create ManagementAgentManagementAgentDataSource#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#delete ManagementAgentManagementAgentDataSource#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#update ManagementAgentManagementAgentDataSource#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#create ManagementAgentManagementAgentDataSource#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#delete ManagementAgentManagementAgentDataSource#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_data_source#update ManagementAgentManagementAgentDataSource#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementAgentManagementAgentDataSourceMetricDimensionsList <a name="ManagementAgentManagementAgentDataSourceMetricDimensionsList" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[ManagementAgentManagementAgentDataSourceMetricDimensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]]

---


### ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference <a name="ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagementAgentManagementAgentDataSourceMetricDimensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceMetricDimensions">ManagementAgentManagementAgentDataSourceMetricDimensions</a>]

---


### ManagementAgentManagementAgentDataSourceTimeoutsOutputReference <a name="ManagementAgentManagementAgentDataSourceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_data_source

managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagementAgentManagementAgentDataSourceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentDataSource.ManagementAgentManagementAgentDataSourceTimeouts">ManagementAgentManagementAgentDataSourceTimeouts</a>]

---



