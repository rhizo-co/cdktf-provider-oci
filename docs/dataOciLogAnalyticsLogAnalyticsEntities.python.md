# `dataOciLogAnalyticsLogAnalyticsEntities` Submodule <a name="`dataOciLogAnalyticsLogAnalyticsEntities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsLogAnalyticsEntities <a name="DataOciLogAnalyticsLogAnalyticsEntities" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities oci_log_analytics_log_analytics_entities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities(
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
  namespace: str,
  cloud_resource_id: str = None,
  entity_type_name: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsEntitiesFilter]] = None,
  hostname: str = None,
  hostname_contains: str = None,
  id: str = None,
  is_management_agent_id_null: str = None,
  lifecycle_details_contains: str = None,
  metadata_equals: typing.List[str] = None,
  name: str = None,
  name_contains: str = None,
  source_id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.cloudResourceId">cloud_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.entityTypeName">entity_type_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.hostnameContains">hostname_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.isManagementAgentIdNull">is_management_agent_id_null</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.lifecycleDetailsContains">lifecycle_details_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.metadataEquals">metadata_equals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.nameContains">name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.sourceId">source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}.

---

##### `cloud_resource_id`<sup>Optional</sup> <a name="cloud_resource_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.cloudResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}.

---

##### `entity_type_name`<sup>Optional</sup> <a name="entity_type_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.entityTypeName"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#filter DataOciLogAnalyticsLogAnalyticsEntities#filter}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.hostname"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}.

---

##### `hostname_contains`<sup>Optional</sup> <a name="hostname_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.hostnameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_management_agent_id_null`<sup>Optional</sup> <a name="is_management_agent_id_null" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.isManagementAgentIdNull"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}.

---

##### `lifecycle_details_contains`<sup>Optional</sup> <a name="lifecycle_details_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.lifecycleDetailsContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}.

---

##### `metadata_equals`<sup>Optional</sup> <a name="metadata_equals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.metadataEquals"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}.

---

##### `name_contains`<sup>Optional</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.nameContains"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}.

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.sourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetCloudResourceId">reset_cloud_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetEntityTypeName">reset_entity_type_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostnameContains">reset_hostname_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetIsManagementAgentIdNull">reset_is_management_agent_id_null</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetLifecycleDetailsContains">reset_lifecycle_details_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetMetadataEquals">reset_metadata_equals</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetNameContains">reset_name_contains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetSourceId">reset_source_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsEntitiesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]]

---

##### `reset_cloud_resource_id` <a name="reset_cloud_resource_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetCloudResourceId"></a>

```python
def reset_cloud_resource_id() -> None
```

##### `reset_entity_type_name` <a name="reset_entity_type_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetEntityTypeName"></a>

```python
def reset_entity_type_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_hostname` <a name="reset_hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_hostname_contains` <a name="reset_hostname_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetHostnameContains"></a>

```python
def reset_hostname_contains() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_management_agent_id_null` <a name="reset_is_management_agent_id_null" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetIsManagementAgentIdNull"></a>

```python
def reset_is_management_agent_id_null() -> None
```

##### `reset_lifecycle_details_contains` <a name="reset_lifecycle_details_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetLifecycleDetailsContains"></a>

```python
def reset_lifecycle_details_contains() -> None
```

##### `reset_metadata_equals` <a name="reset_metadata_equals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetMetadataEquals"></a>

```python
def reset_metadata_equals() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_name_contains` <a name="reset_name_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetNameContains"></a>

```python
def reset_name_contains() -> None
```

##### `reset_source_id` <a name="reset_source_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetSourceId"></a>

```python
def reset_source_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntities resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsLogAnalyticsEntities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsLogAnalyticsEntities to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsLogAnalyticsEntities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsLogAnalyticsEntities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList">DataOciLogAnalyticsLogAnalyticsEntitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.logAnalyticsEntityCollection">log_analytics_entity_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceIdInput">cloud_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeNameInput">entity_type_name_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContainsInput">hostname_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNullInput">is_management_agent_id_null_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContainsInput">lifecycle_details_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEqualsInput">metadata_equals_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContainsInput">name_contains_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceIdInput">source_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceId">cloud_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeName">entity_type_name</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContains">hostname_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNull">is_management_agent_id_null</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContains">lifecycle_details_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEquals">metadata_equals</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContains">name_contains</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filter"></a>

```python
filter: DataOciLogAnalyticsLogAnalyticsEntitiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList">DataOciLogAnalyticsLogAnalyticsEntitiesFilterList</a>

---

##### `log_analytics_entity_collection`<sup>Required</sup> <a name="log_analytics_entity_collection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.logAnalyticsEntityCollection"></a>

```python
log_analytics_entity_collection: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList</a>

---

##### `cloud_resource_id_input`<sup>Optional</sup> <a name="cloud_resource_id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceIdInput"></a>

```python
cloud_resource_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `entity_type_name_input`<sup>Optional</sup> <a name="entity_type_name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeNameInput"></a>

```python
entity_type_name_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsEntitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]]

---

##### `hostname_contains_input`<sup>Optional</sup> <a name="hostname_contains_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContainsInput"></a>

```python
hostname_contains_input: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_management_agent_id_null_input`<sup>Optional</sup> <a name="is_management_agent_id_null_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNullInput"></a>

```python
is_management_agent_id_null_input: str
```

- *Type:* str

---

##### `lifecycle_details_contains_input`<sup>Optional</sup> <a name="lifecycle_details_contains_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContainsInput"></a>

```python
lifecycle_details_contains_input: str
```

- *Type:* str

---

##### `metadata_equals_input`<sup>Optional</sup> <a name="metadata_equals_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEqualsInput"></a>

```python
metadata_equals_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name_contains_input`<sup>Optional</sup> <a name="name_contains_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContainsInput"></a>

```python
name_contains_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `source_id_input`<sup>Optional</sup> <a name="source_id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceIdInput"></a>

```python
source_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `cloud_resource_id`<sup>Required</sup> <a name="cloud_resource_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.cloudResourceId"></a>

```python
cloud_resource_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `entity_type_name`<sup>Required</sup> <a name="entity_type_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.entityTypeName"></a>

```python
entity_type_name: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `hostname_contains`<sup>Required</sup> <a name="hostname_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.hostnameContains"></a>

```python
hostname_contains: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_management_agent_id_null`<sup>Required</sup> <a name="is_management_agent_id_null" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.isManagementAgentIdNull"></a>

```python
is_management_agent_id_null: str
```

- *Type:* str

---

##### `lifecycle_details_contains`<sup>Required</sup> <a name="lifecycle_details_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.lifecycleDetailsContains"></a>

```python
lifecycle_details_contains: str
```

- *Type:* str

---

##### `metadata_equals`<sup>Required</sup> <a name="metadata_equals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.metadataEquals"></a>

```python
metadata_equals: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `name_contains`<sup>Required</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.nameContains"></a>

```python
name_contains: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntities.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesConfig <a name="DataOciLogAnalyticsLogAnalyticsEntitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  namespace: str,
  cloud_resource_id: str = None,
  entity_type_name: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsEntitiesFilter]] = None,
  hostname: str = None,
  hostname_contains: str = None,
  id: str = None,
  is_management_agent_id_null: str = None,
  lifecycle_details_contains: str = None,
  metadata_equals: typing.List[str] = None,
  name: str = None,
  name_contains: str = None,
  source_id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.cloudResourceId">cloud_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.entityTypeName">entity_type_name</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostnameContains">hostname_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.isManagementAgentIdNull">is_management_agent_id_null</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycleDetailsContains">lifecycle_details_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.metadataEquals">metadata_equals</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.nameContains">name_contains</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.sourceId">source_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#compartment_id DataOciLogAnalyticsLogAnalyticsEntities#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#namespace DataOciLogAnalyticsLogAnalyticsEntities#namespace}.

---

##### `cloud_resource_id`<sup>Optional</sup> <a name="cloud_resource_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.cloudResourceId"></a>

```python
cloud_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#cloud_resource_id DataOciLogAnalyticsLogAnalyticsEntities#cloud_resource_id}.

---

##### `entity_type_name`<sup>Optional</sup> <a name="entity_type_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.entityTypeName"></a>

```python
entity_type_name: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#entity_type_name DataOciLogAnalyticsLogAnalyticsEntities#entity_type_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsEntitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#filter DataOciLogAnalyticsLogAnalyticsEntities#filter}

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname DataOciLogAnalyticsLogAnalyticsEntities#hostname}.

---

##### `hostname_contains`<sup>Optional</sup> <a name="hostname_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.hostnameContains"></a>

```python
hostname_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#hostname_contains DataOciLogAnalyticsLogAnalyticsEntities#hostname_contains}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#id DataOciLogAnalyticsLogAnalyticsEntities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_management_agent_id_null`<sup>Optional</sup> <a name="is_management_agent_id_null" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.isManagementAgentIdNull"></a>

```python
is_management_agent_id_null: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#is_management_agent_id_null DataOciLogAnalyticsLogAnalyticsEntities#is_management_agent_id_null}.

---

##### `lifecycle_details_contains`<sup>Optional</sup> <a name="lifecycle_details_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.lifecycleDetailsContains"></a>

```python
lifecycle_details_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#lifecycle_details_contains DataOciLogAnalyticsLogAnalyticsEntities#lifecycle_details_contains}.

---

##### `metadata_equals`<sup>Optional</sup> <a name="metadata_equals" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.metadataEquals"></a>

```python
metadata_equals: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#metadata_equals DataOciLogAnalyticsLogAnalyticsEntities#metadata_equals}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}.

---

##### `name_contains`<sup>Optional</sup> <a name="name_contains" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.nameContains"></a>

```python
name_contains: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name_contains DataOciLogAnalyticsLogAnalyticsEntities#name_contains}.

---

##### `source_id`<sup>Optional</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#source_id DataOciLogAnalyticsLogAnalyticsEntities#source_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#state DataOciLogAnalyticsLogAnalyticsEntities#state}.

---

### DataOciLogAnalyticsLogAnalyticsEntitiesFilter <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#values DataOciLogAnalyticsLogAnalyticsEntities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#regex DataOciLogAnalyticsLogAnalyticsEntities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#name DataOciLogAnalyticsLogAnalyticsEntities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#values DataOciLogAnalyticsLogAnalyticsEntities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_log_analytics_entities#regex DataOciLogAnalyticsLogAnalyticsEntities#regex}.

---

### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection()
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems()
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata()
```


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsLogAnalyticsEntitiesFilterList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsLogAnalyticsEntitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]]

---


### DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLogAnalyticsLogAnalyticsEntitiesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesFilter">DataOciLogAnalyticsLogAnalyticsEntitiesFilter</a>]

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.items"></a>

```python
items: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadata</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.areLogsCollected">are_logs_collected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.cloudResourceId">cloud_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeInternalName">entity_type_internal_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeName">entity_type_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentCompartmentId">management_agent_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentDisplayName">management_agent_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.properties">properties</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.sourceId">source_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeLastDiscovered">time_last_discovered</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timezoneRegion">timezone_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `are_logs_collected`<sup>Required</sup> <a name="are_logs_collected" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.areLogsCollected"></a>

```python
are_logs_collected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `cloud_resource_id`<sup>Required</sup> <a name="cloud_resource_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.cloudResourceId"></a>

```python
cloud_resource_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `entity_type_internal_name`<sup>Required</sup> <a name="entity_type_internal_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeInternalName"></a>

```python
entity_type_internal_name: str
```

- *Type:* str

---

##### `entity_type_name`<sup>Required</sup> <a name="entity_type_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.entityTypeName"></a>

```python
entity_type_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `management_agent_compartment_id`<sup>Required</sup> <a name="management_agent_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentCompartmentId"></a>

```python
management_agent_compartment_id: str
```

- *Type:* str

---

##### `management_agent_display_name`<sup>Required</sup> <a name="management_agent_display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentDisplayName"></a>

```python
management_agent_display_name: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.metadata"></a>

```python
metadata: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsMetadataList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.properties"></a>

```python
properties: StringMap
```

- *Type:* cdktf.StringMap

---

##### `source_id`<sup>Required</sup> <a name="source_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.sourceId"></a>

```python
source_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_discovered`<sup>Required</sup> <a name="time_last_discovered" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeLastDiscovered"></a>

```python
time_last_discovered: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `timezone_region`<sup>Required</sup> <a name="timezone_region" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.timezoneRegion"></a>

```python
timezone_region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItems</a>

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference <a name="DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_log_analytics_entities

dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.items"></a>

```python
items: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsLogAnalyticsEntities.DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection">DataOciLogAnalyticsLogAnalyticsEntitiesLogAnalyticsEntityCollection</a>

---



