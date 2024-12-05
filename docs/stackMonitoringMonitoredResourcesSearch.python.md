# `stackMonitoringMonitoredResourcesSearch` Submodule <a name="`stackMonitoringMonitoredResourcesSearch` Submodule" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StackMonitoringMonitoredResourcesSearch <a name="StackMonitoringMonitoredResourcesSearch" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search oci_stack_monitoring_monitored_resources_search}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch(
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
  compartment_ids: typing.List[str] = None,
  exclude_fields: typing.List[str] = None,
  external_id: str = None,
  fields: typing.List[str] = None,
  host_name: str = None,
  host_name_contains: str = None,
  id: str = None,
  license: str = None,
  lifecycle_states: typing.List[str] = None,
  management_agent_id: str = None,
  name: str = None,
  name_contains: str = None,
  property_equals: typing.Mapping[str] = None,
  resource_category: str = None,
  resource_time_zone: str = None,
  source_type: str = None,
  state: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None,
  timeouts: StackMonitoringMonitoredResourcesSearchTimeouts = None,
  time_updated_greater_than_or_equal_to: str = None,
  time_updated_less_than: str = None,
  type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_id StackMonitoringMonitoredResourcesSearch#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.compartmentIds">compartment_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_ids StackMonitoringMonitoredResourcesSearch#compartment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.excludeFields">exclude_fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#exclude_fields StackMonitoringMonitoredResourcesSearch#exclude_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#external_id StackMonitoringMonitoredResourcesSearch#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#fields StackMonitoringMonitoredResourcesSearch#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name StackMonitoringMonitoredResourcesSearch#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.hostNameContains">host_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name_contains StackMonitoringMonitoredResourcesSearch#host_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#id StackMonitoringMonitoredResourcesSearch#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.license">license</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#license StackMonitoringMonitoredResourcesSearch#license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.lifecycleStates">lifecycle_states</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#lifecycle_states StackMonitoringMonitoredResourcesSearch#lifecycle_states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#management_agent_id StackMonitoringMonitoredResourcesSearch#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name StackMonitoringMonitoredResourcesSearch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.nameContains">name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name_contains StackMonitoringMonitoredResourcesSearch#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.propertyEquals">property_equals</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#property_equals StackMonitoringMonitoredResourcesSearch#property_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.resourceCategory">resource_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_category StackMonitoringMonitoredResourcesSearch#resource_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.resourceTimeZone">resource_time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_time_zone StackMonitoringMonitoredResourcesSearch#resource_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#source_type StackMonitoringMonitoredResourcesSearch#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#state StackMonitoringMonitoredResourcesSearch#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_less_than StackMonitoringMonitoredResourcesSearch#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_less_than StackMonitoringMonitoredResourcesSearch#time_updated_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#type StackMonitoringMonitoredResourcesSearch#type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_id StackMonitoringMonitoredResourcesSearch#compartment_id}.

---

##### `compartment_ids`<sup>Optional</sup> <a name="compartment_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.compartmentIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_ids StackMonitoringMonitoredResourcesSearch#compartment_ids}.

---

##### `exclude_fields`<sup>Optional</sup> <a name="exclude_fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.excludeFields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#exclude_fields StackMonitoringMonitoredResourcesSearch#exclude_fields}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.externalId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#external_id StackMonitoringMonitoredResourcesSearch#external_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.fields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#fields StackMonitoringMonitoredResourcesSearch#fields}.

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.hostName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name StackMonitoringMonitoredResourcesSearch#host_name}.

---

##### `host_name_contains`<sup>Optional</sup> <a name="host_name_contains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.hostNameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name_contains StackMonitoringMonitoredResourcesSearch#host_name_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#id StackMonitoringMonitoredResourcesSearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license`<sup>Optional</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.license"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#license StackMonitoringMonitoredResourcesSearch#license}.

---

##### `lifecycle_states`<sup>Optional</sup> <a name="lifecycle_states" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.lifecycleStates"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#lifecycle_states StackMonitoringMonitoredResourcesSearch#lifecycle_states}.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.managementAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#management_agent_id StackMonitoringMonitoredResourcesSearch#management_agent_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name StackMonitoringMonitoredResourcesSearch#name}.

---

##### `name_contains`<sup>Optional</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.nameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name_contains StackMonitoringMonitoredResourcesSearch#name_contains}.

---

##### `property_equals`<sup>Optional</sup> <a name="property_equals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.propertyEquals"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#property_equals StackMonitoringMonitoredResourcesSearch#property_equals}.

---

##### `resource_category`<sup>Optional</sup> <a name="resource_category" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.resourceCategory"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_category StackMonitoringMonitoredResourcesSearch#resource_category}.

---

##### `resource_time_zone`<sup>Optional</sup> <a name="resource_time_zone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.resourceTimeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_time_zone StackMonitoringMonitoredResourcesSearch#resource_time_zone}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.sourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#source_type StackMonitoringMonitoredResourcesSearch#source_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#state StackMonitoringMonitoredResourcesSearch#state}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.timeCreatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.timeCreatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_less_than StackMonitoringMonitoredResourcesSearch#time_created_less_than}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#timeouts StackMonitoringMonitoredResourcesSearch#timeouts}

---

##### `time_updated_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.timeUpdatedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_updated_greater_than_or_equal_to}.

---

##### `time_updated_less_than`<sup>Optional</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.timeUpdatedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_less_than StackMonitoringMonitoredResourcesSearch#time_updated_less_than}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#type StackMonitoringMonitoredResourcesSearch#type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetCompartmentIds">reset_compartment_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExcludeFields">reset_exclude_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExternalId">reset_external_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostName">reset_host_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostNameContains">reset_host_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLicense">reset_license</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLifecycleStates">reset_lifecycle_states</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetManagementAgentId">reset_management_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetNameContains">reset_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetPropertyEquals">reset_property_equals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceCategory">reset_resource_category</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceTimeZone">reset_resource_time_zone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetSourceType">reset_source_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedGreaterThanOrEqualTo">reset_time_created_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedLessThan">reset_time_created_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedGreaterThanOrEqualTo">reset_time_updated_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedLessThan">reset_time_updated_less_than</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetType">reset_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#create StackMonitoringMonitoredResourcesSearch#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#delete StackMonitoringMonitoredResourcesSearch#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#update StackMonitoringMonitoredResourcesSearch#update}.

---

##### `reset_compartment_ids` <a name="reset_compartment_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetCompartmentIds"></a>

```python
def reset_compartment_ids() -> None
```

##### `reset_exclude_fields` <a name="reset_exclude_fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExcludeFields"></a>

```python
def reset_exclude_fields() -> None
```

##### `reset_external_id` <a name="reset_external_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetExternalId"></a>

```python
def reset_external_id() -> None
```

##### `reset_fields` <a name="reset_fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_host_name` <a name="reset_host_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostName"></a>

```python
def reset_host_name() -> None
```

##### `reset_host_name_contains` <a name="reset_host_name_contains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetHostNameContains"></a>

```python
def reset_host_name_contains() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license` <a name="reset_license" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLicense"></a>

```python
def reset_license() -> None
```

##### `reset_lifecycle_states` <a name="reset_lifecycle_states" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetLifecycleStates"></a>

```python
def reset_lifecycle_states() -> None
```

##### `reset_management_agent_id` <a name="reset_management_agent_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetManagementAgentId"></a>

```python
def reset_management_agent_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_contains` <a name="reset_name_contains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetNameContains"></a>

```python
def reset_name_contains() -> None
```

##### `reset_property_equals` <a name="reset_property_equals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetPropertyEquals"></a>

```python
def reset_property_equals() -> None
```

##### `reset_resource_category` <a name="reset_resource_category" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceCategory"></a>

```python
def reset_resource_category() -> None
```

##### `reset_resource_time_zone` <a name="reset_resource_time_zone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetResourceTimeZone"></a>

```python
def reset_resource_time_zone() -> None
```

##### `reset_source_type` <a name="reset_source_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetSourceType"></a>

```python
def reset_source_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_time_created_greater_than_or_equal_to` <a name="reset_time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedGreaterThanOrEqualTo"></a>

```python
def reset_time_created_greater_than_or_equal_to() -> None
```

##### `reset_time_created_less_than` <a name="reset_time_created_less_than" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeCreatedLessThan"></a>

```python
def reset_time_created_less_than() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_updated_greater_than_or_equal_to` <a name="reset_time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedGreaterThanOrEqualTo"></a>

```python
def reset_time_updated_greater_than_or_equal_to() -> None
```

##### `reset_time_updated_less_than` <a name="reset_time_updated_less_than" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetTimeUpdatedLessThan"></a>

```python
def reset_time_updated_less_than() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.resetType"></a>

```python
def reset_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearch resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a StackMonitoringMonitoredResourcesSearch resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the StackMonitoringMonitoredResourcesSearch to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing StackMonitoringMonitoredResourcesSearch that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StackMonitoringMonitoredResourcesSearch to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList">StackMonitoringMonitoredResourcesSearchItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdsInput">compartment_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFieldsInput">exclude_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalIdInput">external_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fieldsInput">fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContainsInput">host_name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameInput">host_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.licenseInput">license_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStatesInput">lifecycle_states_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentIdInput">management_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContainsInput">name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEqualsInput">property_equals_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategoryInput">resource_category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZoneInput">resource_time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceTypeInput">source_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualToInput">time_created_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThanInput">time_created_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualToInput">time_updated_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThanInput">time_updated_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIds">compartment_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFields">exclude_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContains">host_name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.license">license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStates">lifecycle_states</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContains">name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEquals">property_equals</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategory">resource_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZone">resource_time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.items"></a>

```python
items: StackMonitoringMonitoredResourcesSearchItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList">StackMonitoringMonitoredResourcesSearchItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeouts"></a>

```python
timeouts: StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference">StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_ids_input`<sup>Optional</sup> <a name="compartment_ids_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIdsInput"></a>

```python
compartment_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_fields_input`<sup>Optional</sup> <a name="exclude_fields_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFieldsInput"></a>

```python
exclude_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_id_input`<sup>Optional</sup> <a name="external_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalIdInput"></a>

```python
external_id_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fieldsInput"></a>

```python
fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_name_contains_input`<sup>Optional</sup> <a name="host_name_contains_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContainsInput"></a>

```python
host_name_contains_input: str
```

- *Type:* str

---

##### `host_name_input`<sup>Optional</sup> <a name="host_name_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameInput"></a>

```python
host_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_input`<sup>Optional</sup> <a name="license_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.licenseInput"></a>

```python
license_input: str
```

- *Type:* str

---

##### `lifecycle_states_input`<sup>Optional</sup> <a name="lifecycle_states_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStatesInput"></a>

```python
lifecycle_states_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `management_agent_id_input`<sup>Optional</sup> <a name="management_agent_id_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentIdInput"></a>

```python
management_agent_id_input: str
```

- *Type:* str

---

##### `name_contains_input`<sup>Optional</sup> <a name="name_contains_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContainsInput"></a>

```python
name_contains_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `property_equals_input`<sup>Optional</sup> <a name="property_equals_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEqualsInput"></a>

```python
property_equals_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_category_input`<sup>Optional</sup> <a name="resource_category_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategoryInput"></a>

```python
resource_category_input: str
```

- *Type:* str

---

##### `resource_time_zone_input`<sup>Optional</sup> <a name="resource_time_zone_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZoneInput"></a>

```python
resource_time_zone_input: str
```

- *Type:* str

---

##### `source_type_input`<sup>Optional</sup> <a name="source_type_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceTypeInput"></a>

```python
source_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualToInput"></a>

```python
time_created_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_created_less_than_input`<sup>Optional</sup> <a name="time_created_less_than_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThanInput"></a>

```python
time_created_less_than_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, StackMonitoringMonitoredResourcesSearchTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>]

---

##### `time_updated_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualToInput"></a>

```python
time_updated_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_updated_less_than_input`<sup>Optional</sup> <a name="time_updated_less_than_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThanInput"></a>

```python
time_updated_less_than_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_ids`<sup>Required</sup> <a name="compartment_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.compartmentIds"></a>

```python
compartment_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `exclude_fields`<sup>Required</sup> <a name="exclude_fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.excludeFields"></a>

```python
exclude_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `host_name_contains`<sup>Required</sup> <a name="host_name_contains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.hostNameContains"></a>

```python
host_name_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license`<sup>Required</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.license"></a>

```python
license: str
```

- *Type:* str

---

##### `lifecycle_states`<sup>Required</sup> <a name="lifecycle_states" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.lifecycleStates"></a>

```python
lifecycle_states: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_contains`<sup>Required</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.nameContains"></a>

```python
name_contains: str
```

- *Type:* str

---

##### `property_equals`<sup>Required</sup> <a name="property_equals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.propertyEquals"></a>

```python
property_equals: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `resource_category`<sup>Required</sup> <a name="resource_category" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceCategory"></a>

```python
resource_category: str
```

- *Type:* str

---

##### `resource_time_zone`<sup>Required</sup> <a name="resource_time_zone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.resourceTimeZone"></a>

```python
resource_time_zone: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created_greater_than_or_equal_to`<sup>Required</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_created_less_than`<sup>Required</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

---

##### `time_updated_greater_than_or_equal_to`<sup>Required</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedGreaterThanOrEqualTo"></a>

```python
time_updated_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_updated_less_than`<sup>Required</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.timeUpdatedLessThan"></a>

```python
time_updated_less_than: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearch.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### StackMonitoringMonitoredResourcesSearchConfig <a name="StackMonitoringMonitoredResourcesSearchConfig" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  compartment_ids: typing.List[str] = None,
  exclude_fields: typing.List[str] = None,
  external_id: str = None,
  fields: typing.List[str] = None,
  host_name: str = None,
  host_name_contains: str = None,
  id: str = None,
  license: str = None,
  lifecycle_states: typing.List[str] = None,
  management_agent_id: str = None,
  name: str = None,
  name_contains: str = None,
  property_equals: typing.Mapping[str] = None,
  resource_category: str = None,
  resource_time_zone: str = None,
  source_type: str = None,
  state: str = None,
  time_created_greater_than_or_equal_to: str = None,
  time_created_less_than: str = None,
  timeouts: StackMonitoringMonitoredResourcesSearchTimeouts = None,
  time_updated_greater_than_or_equal_to: str = None,
  time_updated_less_than: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_id StackMonitoringMonitoredResourcesSearch#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentIds">compartment_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_ids StackMonitoringMonitoredResourcesSearch#compartment_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.excludeFields">exclude_fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#exclude_fields StackMonitoringMonitoredResourcesSearch#exclude_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.externalId">external_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#external_id StackMonitoringMonitoredResourcesSearch#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#fields StackMonitoringMonitoredResourcesSearch#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostName">host_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name StackMonitoringMonitoredResourcesSearch#host_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostNameContains">host_name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name_contains StackMonitoringMonitoredResourcesSearch#host_name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#id StackMonitoringMonitoredResourcesSearch#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.license">license</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#license StackMonitoringMonitoredResourcesSearch#license}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycleStates">lifecycle_states</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#lifecycle_states StackMonitoringMonitoredResourcesSearch#lifecycle_states}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#management_agent_id StackMonitoringMonitoredResourcesSearch#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name StackMonitoringMonitoredResourcesSearch#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.nameContains">name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name_contains StackMonitoringMonitoredResourcesSearch#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.propertyEquals">property_equals</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#property_equals StackMonitoringMonitoredResourcesSearch#property_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceCategory">resource_category</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_category StackMonitoringMonitoredResourcesSearch#resource_category}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceTimeZone">resource_time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_time_zone StackMonitoringMonitoredResourcesSearch#resource_time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.sourceType">source_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#source_type StackMonitoringMonitoredResourcesSearch#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#state StackMonitoringMonitoredResourcesSearch#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedGreaterThanOrEqualTo">time_created_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_created_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedLessThan">time_created_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_less_than StackMonitoringMonitoredResourcesSearch#time_created_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedGreaterThanOrEqualTo">time_updated_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_updated_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedLessThan">time_updated_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_less_than StackMonitoringMonitoredResourcesSearch#time_updated_less_than}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#type StackMonitoringMonitoredResourcesSearch#type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_id StackMonitoringMonitoredResourcesSearch#compartment_id}.

---

##### `compartment_ids`<sup>Optional</sup> <a name="compartment_ids" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.compartmentIds"></a>

```python
compartment_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#compartment_ids StackMonitoringMonitoredResourcesSearch#compartment_ids}.

---

##### `exclude_fields`<sup>Optional</sup> <a name="exclude_fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.excludeFields"></a>

```python
exclude_fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#exclude_fields StackMonitoringMonitoredResourcesSearch#exclude_fields}.

---

##### `external_id`<sup>Optional</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#external_id StackMonitoringMonitoredResourcesSearch#external_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#fields StackMonitoringMonitoredResourcesSearch#fields}.

---

##### `host_name`<sup>Optional</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name StackMonitoringMonitoredResourcesSearch#host_name}.

---

##### `host_name_contains`<sup>Optional</sup> <a name="host_name_contains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.hostNameContains"></a>

```python
host_name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#host_name_contains StackMonitoringMonitoredResourcesSearch#host_name_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#id StackMonitoringMonitoredResourcesSearch#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license`<sup>Optional</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.license"></a>

```python
license: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#license StackMonitoringMonitoredResourcesSearch#license}.

---

##### `lifecycle_states`<sup>Optional</sup> <a name="lifecycle_states" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.lifecycleStates"></a>

```python
lifecycle_states: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#lifecycle_states StackMonitoringMonitoredResourcesSearch#lifecycle_states}.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#management_agent_id StackMonitoringMonitoredResourcesSearch#management_agent_id}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name StackMonitoringMonitoredResourcesSearch#name}.

---

##### `name_contains`<sup>Optional</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.nameContains"></a>

```python
name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#name_contains StackMonitoringMonitoredResourcesSearch#name_contains}.

---

##### `property_equals`<sup>Optional</sup> <a name="property_equals" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.propertyEquals"></a>

```python
property_equals: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#property_equals StackMonitoringMonitoredResourcesSearch#property_equals}.

---

##### `resource_category`<sup>Optional</sup> <a name="resource_category" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceCategory"></a>

```python
resource_category: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_category StackMonitoringMonitoredResourcesSearch#resource_category}.

---

##### `resource_time_zone`<sup>Optional</sup> <a name="resource_time_zone" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.resourceTimeZone"></a>

```python
resource_time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#resource_time_zone StackMonitoringMonitoredResourcesSearch#resource_time_zone}.

---

##### `source_type`<sup>Optional</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#source_type StackMonitoringMonitoredResourcesSearch#source_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#state StackMonitoringMonitoredResourcesSearch#state}.

---

##### `time_created_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_created_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedGreaterThanOrEqualTo"></a>

```python
time_created_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_created_greater_than_or_equal_to}.

---

##### `time_created_less_than`<sup>Optional</sup> <a name="time_created_less_than" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeCreatedLessThan"></a>

```python
time_created_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_created_less_than StackMonitoringMonitoredResourcesSearch#time_created_less_than}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeouts"></a>

```python
timeouts: StackMonitoringMonitoredResourcesSearchTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#timeouts StackMonitoringMonitoredResourcesSearch#timeouts}

---

##### `time_updated_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_updated_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedGreaterThanOrEqualTo"></a>

```python
time_updated_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_greater_than_or_equal_to StackMonitoringMonitoredResourcesSearch#time_updated_greater_than_or_equal_to}.

---

##### `time_updated_less_than`<sup>Optional</sup> <a name="time_updated_less_than" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.timeUpdatedLessThan"></a>

```python
time_updated_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#time_updated_less_than StackMonitoringMonitoredResourcesSearch#time_updated_less_than}.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#type StackMonitoringMonitoredResourcesSearch#type}.

---

### StackMonitoringMonitoredResourcesSearchItems <a name="StackMonitoringMonitoredResourcesSearchItems" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems()
```


### StackMonitoringMonitoredResourcesSearchItemsProperties <a name="StackMonitoringMonitoredResourcesSearchItemsProperties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties()
```


### StackMonitoringMonitoredResourcesSearchTimeouts <a name="StackMonitoringMonitoredResourcesSearchTimeouts" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#create StackMonitoringMonitoredResourcesSearch#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#delete StackMonitoringMonitoredResourcesSearch#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#update StackMonitoringMonitoredResourcesSearch#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#create StackMonitoringMonitoredResourcesSearch#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#delete StackMonitoringMonitoredResourcesSearch#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/stack_monitoring_monitored_resources_search#update StackMonitoringMonitoredResourcesSearch#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StackMonitoringMonitoredResourcesSearchItemsList <a name="StackMonitoringMonitoredResourcesSearchItemsList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackMonitoringMonitoredResourcesSearchItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StackMonitoringMonitoredResourcesSearchItemsOutputReference <a name="StackMonitoringMonitoredResourcesSearchItemsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.license">license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList">StackMonitoringMonitoredResourcesSearchItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.resourceCategory">resource_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems">StackMonitoringMonitoredResourcesSearchItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license`<sup>Required</sup> <a name="license" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.license"></a>

```python
license: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.properties"></a>

```python
properties: StackMonitoringMonitoredResourcesSearchItemsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList">StackMonitoringMonitoredResourcesSearchItemsPropertiesList</a>

---

##### `resource_category`<sup>Required</sup> <a name="resource_category" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.resourceCategory"></a>

```python
resource_category: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMonitoredResourcesSearchItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItems">StackMonitoringMonitoredResourcesSearchItems</a>

---


### StackMonitoringMonitoredResourcesSearchItemsPropertiesList <a name="StackMonitoringMonitoredResourcesSearchItemsPropertiesList" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference <a name="StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties">StackMonitoringMonitoredResourcesSearchItemsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: StackMonitoringMonitoredResourcesSearchItemsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchItemsProperties">StackMonitoringMonitoredResourcesSearchItemsProperties</a>

---


### StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference <a name="StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import stack_monitoring_monitored_resources_search

stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, StackMonitoringMonitoredResourcesSearchTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.stackMonitoringMonitoredResourcesSearch.StackMonitoringMonitoredResourcesSearchTimeouts">StackMonitoringMonitoredResourcesSearchTimeouts</a>]

---



