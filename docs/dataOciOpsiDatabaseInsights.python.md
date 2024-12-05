# `dataOciOpsiDatabaseInsights` Submodule <a name="`dataOciOpsiDatabaseInsights` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiDatabaseInsights <a name="DataOciOpsiDatabaseInsights" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights oci_opsi_database_insights}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  database_id: typing.List[str] = None,
  database_type: typing.List[str] = None,
  enterprise_manager_bridge_id: str = None,
  exadata_insight_id: str = None,
  fields: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOpsiDatabaseInsightsFilter]] = None,
  id: str = None,
  opsi_private_endpoint_id: str = None,
  state: typing.List[str] = None,
  status: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id DataOciOpsiDatabaseInsights#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id_in_subtree DataOciOpsiDatabaseInsights#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.databaseId">database_id</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_id DataOciOpsiDatabaseInsights#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.databaseType">database_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_type DataOciOpsiDatabaseInsights#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#enterprise_manager_bridge_id DataOciOpsiDatabaseInsights#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#exadata_insight_id DataOciOpsiDatabaseInsights#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#fields DataOciOpsiDatabaseInsights#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#id DataOciOpsiDatabaseInsights#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.opsiPrivateEndpointId">opsi_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#opsi_private_endpoint_id DataOciOpsiDatabaseInsights#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#state DataOciOpsiDatabaseInsights#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.status">status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#status DataOciOpsiDatabaseInsights#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id DataOciOpsiDatabaseInsights#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id_in_subtree DataOciOpsiDatabaseInsights#compartment_id_in_subtree}.

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.databaseId"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_id DataOciOpsiDatabaseInsights#database_id}.

---

##### `database_type`<sup>Optional</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.databaseType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_type DataOciOpsiDatabaseInsights#database_type}.

---

##### `enterprise_manager_bridge_id`<sup>Optional</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.enterpriseManagerBridgeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#enterprise_manager_bridge_id DataOciOpsiDatabaseInsights#enterprise_manager_bridge_id}.

---

##### `exadata_insight_id`<sup>Optional</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.exadataInsightId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#exadata_insight_id DataOciOpsiDatabaseInsights#exadata_insight_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.fields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#fields DataOciOpsiDatabaseInsights#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#filter DataOciOpsiDatabaseInsights#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#id DataOciOpsiDatabaseInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsi_private_endpoint_id`<sup>Optional</sup> <a name="opsi_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.opsiPrivateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#opsi_private_endpoint_id DataOciOpsiDatabaseInsights#opsi_private_endpoint_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#state DataOciOpsiDatabaseInsights#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.Initializer.parameter.status"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#status DataOciOpsiDatabaseInsights#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseId">reset_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseType">reset_database_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetEnterpriseManagerBridgeId">reset_enterprise_manager_bridge_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetExadataInsightId">reset_exadata_insight_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOpsiPrivateEndpointId">reset_opsi_private_endpoint_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciOpsiDatabaseInsightsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]]

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_database_id` <a name="reset_database_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseId"></a>

```python
def reset_database_id() -> None
```

##### `reset_database_type` <a name="reset_database_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetDatabaseType"></a>

```python
def reset_database_type() -> None
```

##### `reset_enterprise_manager_bridge_id` <a name="reset_enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetEnterpriseManagerBridgeId"></a>

```python
def reset_enterprise_manager_bridge_id() -> None
```

##### `reset_exadata_insight_id` <a name="reset_exadata_insight_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetExadataInsightId"></a>

```python
def reset_exadata_insight_id() -> None
```

##### `reset_fields` <a name="reset_fields" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_opsi_private_endpoint_id` <a name="reset_opsi_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetOpsiPrivateEndpointId"></a>

```python
def reset_opsi_private_endpoint_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpsiDatabaseInsights resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpsiDatabaseInsights resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpsiDatabaseInsights to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpsiDatabaseInsights that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiDatabaseInsights to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseInsightsCollection">database_insights_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList">DataOciOpsiDatabaseInsightsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseIdInput">database_id_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseTypeInput">database_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeIdInput">enterprise_manager_bridge_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightIdInput">exadata_insight_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fieldsInput">fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointIdInput">opsi_private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.statusInput">status_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseId">database_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseType">database_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointId">opsi_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.status">status</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `database_insights_collection`<sup>Required</sup> <a name="database_insights_collection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseInsightsCollection"></a>

```python
database_insights_collection: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filter"></a>

```python
filter: DataOciOpsiDatabaseInsightsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList">DataOciOpsiDatabaseInsightsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseIdInput"></a>

```python
database_id_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_type_input`<sup>Optional</sup> <a name="database_type_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseTypeInput"></a>

```python
database_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enterprise_manager_bridge_id_input`<sup>Optional</sup> <a name="enterprise_manager_bridge_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeIdInput"></a>

```python
enterprise_manager_bridge_id_input: str
```

- *Type:* str

---

##### `exadata_insight_id_input`<sup>Optional</sup> <a name="exadata_insight_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightIdInput"></a>

```python
exadata_insight_id_input: str
```

- *Type:* str

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fieldsInput"></a>

```python
fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciOpsiDatabaseInsightsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `opsi_private_endpoint_id_input`<sup>Optional</sup> <a name="opsi_private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointIdInput"></a>

```python
opsi_private_endpoint_id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.statusInput"></a>

```python
status_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseId"></a>

```python
database_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.databaseType"></a>

```python
database_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enterprise_manager_bridge_id`<sup>Required</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.enterpriseManagerBridgeId"></a>

```python
enterprise_manager_bridge_id: str
```

- *Type:* str

---

##### `exadata_insight_id`<sup>Required</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.exadataInsightId"></a>

```python
exadata_insight_id: str
```

- *Type:* str

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `opsi_private_endpoint_id`<sup>Required</sup> <a name="opsi_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.opsiPrivateEndpointId"></a>

```python
opsi_private_endpoint_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsights.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiDatabaseInsightsConfig <a name="DataOciOpsiDatabaseInsightsConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  database_id: typing.List[str] = None,
  database_type: typing.List[str] = None,
  enterprise_manager_bridge_id: str = None,
  exadata_insight_id: str = None,
  fields: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciOpsiDatabaseInsightsFilter]] = None,
  id: str = None,
  opsi_private_endpoint_id: str = None,
  state: typing.List[str] = None,
  status: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id DataOciOpsiDatabaseInsights#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id_in_subtree DataOciOpsiDatabaseInsights#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseId">database_id</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_id DataOciOpsiDatabaseInsights#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseType">database_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_type DataOciOpsiDatabaseInsights#database_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#enterprise_manager_bridge_id DataOciOpsiDatabaseInsights#enterprise_manager_bridge_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#exadata_insight_id DataOciOpsiDatabaseInsights#exadata_insight_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#fields DataOciOpsiDatabaseInsights#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#id DataOciOpsiDatabaseInsights#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.opsiPrivateEndpointId">opsi_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#opsi_private_endpoint_id DataOciOpsiDatabaseInsights#opsi_private_endpoint_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#state DataOciOpsiDatabaseInsights#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.status">status</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#status DataOciOpsiDatabaseInsights#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id DataOciOpsiDatabaseInsights#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#compartment_id_in_subtree DataOciOpsiDatabaseInsights#compartment_id_in_subtree}.

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseId"></a>

```python
database_id: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_id DataOciOpsiDatabaseInsights#database_id}.

---

##### `database_type`<sup>Optional</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.databaseType"></a>

```python
database_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#database_type DataOciOpsiDatabaseInsights#database_type}.

---

##### `enterprise_manager_bridge_id`<sup>Optional</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.enterpriseManagerBridgeId"></a>

```python
enterprise_manager_bridge_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#enterprise_manager_bridge_id DataOciOpsiDatabaseInsights#enterprise_manager_bridge_id}.

---

##### `exadata_insight_id`<sup>Optional</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.exadataInsightId"></a>

```python
exadata_insight_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#exadata_insight_id DataOciOpsiDatabaseInsights#exadata_insight_id}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#fields DataOciOpsiDatabaseInsights#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciOpsiDatabaseInsightsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#filter DataOciOpsiDatabaseInsights#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#id DataOciOpsiDatabaseInsights#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `opsi_private_endpoint_id`<sup>Optional</sup> <a name="opsi_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.opsiPrivateEndpointId"></a>

```python
opsi_private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#opsi_private_endpoint_id DataOciOpsiDatabaseInsights#opsi_private_endpoint_id}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#state DataOciOpsiDatabaseInsights#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsConfig.property.status"></a>

```python
status: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#status DataOciOpsiDatabaseInsights#status}.

---

### DataOciOpsiDatabaseInsightsDatabaseInsightsCollection <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollection" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection()
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems()
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails()
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails()
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts()
```


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails()
```


### DataOciOpsiDatabaseInsightsFilter <a name="DataOciOpsiDatabaseInsightsFilter" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#name DataOciOpsiDatabaseInsights#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#values DataOciOpsiDatabaseInsights#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#regex DataOciOpsiDatabaseInsights#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#name DataOciOpsiDatabaseInsights#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#values DataOciOpsiDatabaseInsights#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_database_insights#regex DataOciOpsiDatabaseInsights#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialSourceName">credential_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_source_name`<sup>Required</sup> <a name="credential_source_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialSourceName"></a>

```python
credential_source_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetails</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.hostIp">host_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_ip`<sup>Required</sup> <a name="host_ip" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.hostIp"></a>

```python
host_ip: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHosts</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hosts">hosts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `hosts`<sup>Required</sup> <a name="hosts" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.hosts"></a>

```python
hosts: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsHostsList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetails</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialSourceName">credential_source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.walletSecretId">wallet_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_source_name`<sup>Required</sup> <a name="credential_source_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialSourceName"></a>

```python
credential_source_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `wallet_secret_id`<sup>Required</sup> <a name="wallet_secret_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.walletSecretId"></a>

```python
wallet_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetails</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionCredentialDetails">connection_credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionDetails">connection_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.credentialDetails">credential_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseConnectionStatusDetails">database_connection_status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseDisplayName">database_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseName">database_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseResourceType">database_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseType">database_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseVersion">database_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.dbmPrivateEndpointId">dbm_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.deploymentType">deployment_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerBridgeId">enterprise_manager_bridge_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityDisplayName">enterprise_manager_entity_display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityIdentifier">enterprise_manager_entity_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityName">enterprise_manager_entity_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityType">enterprise_manager_entity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerIdentifier">enterprise_manager_identifier</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.entitySource">entity_source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.exadataInsightId">exadata_insight_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isAdvancedFeaturesEnabled">is_advanced_features_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHeatWaveClusterAttached">is_heat_wave_cluster_attached</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHighlyAvailable">is_highly_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.opsiPrivateEndpointId">opsi_private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.parentId">parent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.processorCount">processor_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.rootId">root_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `connection_credential_details`<sup>Required</sup> <a name="connection_credential_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionCredentialDetails"></a>

```python
connection_credential_details: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionCredentialDetailsList</a>

---

##### `connection_details`<sup>Required</sup> <a name="connection_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectionDetails"></a>

```python
connection_details: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsConnectionDetailsList</a>

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `credential_details`<sup>Required</sup> <a name="credential_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.credentialDetails"></a>

```python
credential_details: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsCredentialDetailsList</a>

---

##### `database_connection_status_details`<sup>Required</sup> <a name="database_connection_status_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseConnectionStatusDetails"></a>

```python
database_connection_status_details: str
```

- *Type:* str

---

##### `database_display_name`<sup>Required</sup> <a name="database_display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseDisplayName"></a>

```python
database_display_name: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_name`<sup>Required</sup> <a name="database_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseName"></a>

```python
database_name: str
```

- *Type:* str

---

##### `database_resource_type`<sup>Required</sup> <a name="database_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseResourceType"></a>

```python
database_resource_type: str
```

- *Type:* str

---

##### `database_type`<sup>Required</sup> <a name="database_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseType"></a>

```python
database_type: str
```

- *Type:* str

---

##### `database_version`<sup>Required</sup> <a name="database_version" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.databaseVersion"></a>

```python
database_version: str
```

- *Type:* str

---

##### `dbm_private_endpoint_id`<sup>Required</sup> <a name="dbm_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.dbmPrivateEndpointId"></a>

```python
dbm_private_endpoint_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deployment_type`<sup>Required</sup> <a name="deployment_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.deploymentType"></a>

```python
deployment_type: str
```

- *Type:* str

---

##### `enterprise_manager_bridge_id`<sup>Required</sup> <a name="enterprise_manager_bridge_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerBridgeId"></a>

```python
enterprise_manager_bridge_id: str
```

- *Type:* str

---

##### `enterprise_manager_entity_display_name`<sup>Required</sup> <a name="enterprise_manager_entity_display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityDisplayName"></a>

```python
enterprise_manager_entity_display_name: str
```

- *Type:* str

---

##### `enterprise_manager_entity_identifier`<sup>Required</sup> <a name="enterprise_manager_entity_identifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityIdentifier"></a>

```python
enterprise_manager_entity_identifier: str
```

- *Type:* str

---

##### `enterprise_manager_entity_name`<sup>Required</sup> <a name="enterprise_manager_entity_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityName"></a>

```python
enterprise_manager_entity_name: str
```

- *Type:* str

---

##### `enterprise_manager_entity_type`<sup>Required</sup> <a name="enterprise_manager_entity_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerEntityType"></a>

```python
enterprise_manager_entity_type: str
```

- *Type:* str

---

##### `enterprise_manager_identifier`<sup>Required</sup> <a name="enterprise_manager_identifier" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.enterpriseManagerIdentifier"></a>

```python
enterprise_manager_identifier: str
```

- *Type:* str

---

##### `entity_source`<sup>Required</sup> <a name="entity_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.entitySource"></a>

```python
entity_source: str
```

- *Type:* str

---

##### `exadata_insight_id`<sup>Required</sup> <a name="exadata_insight_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.exadataInsightId"></a>

```python
exadata_insight_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_advanced_features_enabled`<sup>Required</sup> <a name="is_advanced_features_enabled" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isAdvancedFeaturesEnabled"></a>

```python
is_advanced_features_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_heat_wave_cluster_attached`<sup>Required</sup> <a name="is_heat_wave_cluster_attached" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHeatWaveClusterAttached"></a>

```python
is_heat_wave_cluster_attached: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_highly_available`<sup>Required</sup> <a name="is_highly_available" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.isHighlyAvailable"></a>

```python
is_highly_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `opsi_private_endpoint_id`<sup>Required</sup> <a name="opsi_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.opsiPrivateEndpointId"></a>

```python
opsi_private_endpoint_id: str
```

- *Type:* str

---

##### `parent_id`<sup>Required</sup> <a name="parent_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.parentId"></a>

```python
parent_id: str
```

- *Type:* str

---

##### `processor_count`<sup>Required</sup> <a name="processor_count" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.processorCount"></a>

```python
processor_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `root_id`<sup>Required</sup> <a name="root_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.rootId"></a>

```python
root_id: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItems</a>

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference <a name="DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection">DataOciOpsiDatabaseInsightsDatabaseInsightsCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.items"></a>

```python
items: DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList">DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOpsiDatabaseInsightsDatabaseInsightsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsDatabaseInsightsCollection">DataOciOpsiDatabaseInsightsDatabaseInsightsCollection</a>

---


### DataOciOpsiDatabaseInsightsFilterList <a name="DataOciOpsiDatabaseInsightsFilterList" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOpsiDatabaseInsightsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciOpsiDatabaseInsightsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]]

---


### DataOciOpsiDatabaseInsightsFilterOutputReference <a name="DataOciOpsiDatabaseInsightsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_database_insights

dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciOpsiDatabaseInsightsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciOpsiDatabaseInsights.DataOciOpsiDatabaseInsightsFilter">DataOciOpsiDatabaseInsightsFilter</a>]

---



