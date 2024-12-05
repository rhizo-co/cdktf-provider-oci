# `dataOciCloudGuardAdhocQueries` Submodule <a name="`dataOciCloudGuardAdhocQueries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardAdhocQueries <a name="DataOciCloudGuardAdhocQueries" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries oci_cloud_guard_adhoc_queries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries(
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
  access_level: str = None,
  adhoc_query_status: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardAdhocQueriesFilter]] = None,
  id: str = None,
  time_ended_filter_query_param: str = None,
  time_started_filter_query_param: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.adhocQueryStatus">adhoc_query_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.timeEndedFilterQueryParam">time_ended_filter_query_param</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.timeStartedFilterQueryParam">time_started_filter_query_param</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}.

---

##### `adhoc_query_status`<sup>Optional</sup> <a name="adhoc_query_status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.adhocQueryStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#filter DataOciCloudGuardAdhocQueries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_ended_filter_query_param`<sup>Optional</sup> <a name="time_ended_filter_query_param" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.timeEndedFilterQueryParam"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}.

---

##### `time_started_filter_query_param`<sup>Optional</sup> <a name="time_started_filter_query_param" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.Initializer.parameter.timeStartedFilterQueryParam"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAdhocQueryStatus">reset_adhoc_query_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeEndedFilterQueryParam">reset_time_ended_filter_query_param</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeStartedFilterQueryParam">reset_time_started_filter_query_param</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCloudGuardAdhocQueriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_adhoc_query_status` <a name="reset_adhoc_query_status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetAdhocQueryStatus"></a>

```python
def reset_adhoc_query_status() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_ended_filter_query_param` <a name="reset_time_ended_filter_query_param" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeEndedFilterQueryParam"></a>

```python
def reset_time_ended_filter_query_param() -> None
```

##### `reset_time_started_filter_query_param` <a name="reset_time_started_filter_query_param" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.resetTimeStartedFilterQueryParam"></a>

```python
def reset_time_started_filter_query_param() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCloudGuardAdhocQueries resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCloudGuardAdhocQueries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCloudGuardAdhocQueries to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCloudGuardAdhocQueries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardAdhocQueries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryCollection">adhoc_query_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList">DataOciCloudGuardAdhocQueriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatusInput">adhoc_query_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParamInput">time_ended_filter_query_param_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParamInput">time_started_filter_query_param_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatus">adhoc_query_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParam">time_ended_filter_query_param</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParam">time_started_filter_query_param</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `adhoc_query_collection`<sup>Required</sup> <a name="adhoc_query_collection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryCollection"></a>

```python
adhoc_query_collection: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filter"></a>

```python
filter: DataOciCloudGuardAdhocQueriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList">DataOciCloudGuardAdhocQueriesFilterList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `adhoc_query_status_input`<sup>Optional</sup> <a name="adhoc_query_status_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatusInput"></a>

```python
adhoc_query_status_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCloudGuardAdhocQueriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `time_ended_filter_query_param_input`<sup>Optional</sup> <a name="time_ended_filter_query_param_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParamInput"></a>

```python
time_ended_filter_query_param_input: str
```

- *Type:* str

---

##### `time_started_filter_query_param_input`<sup>Optional</sup> <a name="time_started_filter_query_param_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParamInput"></a>

```python
time_started_filter_query_param_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `adhoc_query_status`<sup>Required</sup> <a name="adhoc_query_status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.adhocQueryStatus"></a>

```python
adhoc_query_status: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `time_ended_filter_query_param`<sup>Required</sup> <a name="time_ended_filter_query_param" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeEndedFilterQueryParam"></a>

```python
time_ended_filter_query_param: str
```

- *Type:* str

---

##### `time_started_filter_query_param`<sup>Required</sup> <a name="time_started_filter_query_param" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.timeStartedFilterQueryParam"></a>

```python
time_started_filter_query_param: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueries.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardAdhocQueriesAdhocQueryCollection <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection()
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems()
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails()
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources()
```


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails()
```


### DataOciCloudGuardAdhocQueriesConfig <a name="DataOciCloudGuardAdhocQueriesConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  adhoc_query_status: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardAdhocQueriesFilter]] = None,
  id: str = None,
  time_ended_filter_query_param: str = None,
  time_started_filter_query_param: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.adhocQueryStatus">adhoc_query_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeEndedFilterQueryParam">time_ended_filter_query_param</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeStartedFilterQueryParam">time_started_filter_query_param</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id DataOciCloudGuardAdhocQueries#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#access_level DataOciCloudGuardAdhocQueries#access_level}.

---

##### `adhoc_query_status`<sup>Optional</sup> <a name="adhoc_query_status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.adhocQueryStatus"></a>

```python
adhoc_query_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#adhoc_query_status DataOciCloudGuardAdhocQueries#adhoc_query_status}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#compartment_id_in_subtree DataOciCloudGuardAdhocQueries#compartment_id_in_subtree}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCloudGuardAdhocQueriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#filter DataOciCloudGuardAdhocQueries#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#id DataOciCloudGuardAdhocQueries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_ended_filter_query_param`<sup>Optional</sup> <a name="time_ended_filter_query_param" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeEndedFilterQueryParam"></a>

```python
time_ended_filter_query_param: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_ended_filter_query_param DataOciCloudGuardAdhocQueries#time_ended_filter_query_param}.

---

##### `time_started_filter_query_param`<sup>Optional</sup> <a name="time_started_filter_query_param" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesConfig.property.timeStartedFilterQueryParam"></a>

```python
time_started_filter_query_param: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#time_started_filter_query_param DataOciCloudGuardAdhocQueries#time_started_filter_query_param}.

---

### DataOciCloudGuardAdhocQueriesFilter <a name="DataOciCloudGuardAdhocQueriesFilter" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#name DataOciCloudGuardAdhocQueries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#values DataOciCloudGuardAdhocQueries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#regex DataOciCloudGuardAdhocQueries#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#name DataOciCloudGuardAdhocQueries#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#values DataOciCloudGuardAdhocQueries#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_adhoc_queries#regex DataOciCloudGuardAdhocQueries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds">resource_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_ids`<sup>Required</sup> <a name="resource_ids" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceIds"></a>

```python
resource_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResources</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.adhocQueryResources">adhoc_query_resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.query">query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adhoc_query_resources`<sup>Required</sup> <a name="adhoc_query_resources" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.adhocQueryResources"></a>

```python
adhoc_query_resources: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsAdhocQueryResourcesList</a>

---

##### `query`<sup>Required</sup> <a name="query" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.query"></a>

```python
query: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetails</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expectedCount">expected_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expiredCount">expired_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.failedCount">failed_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalError">regional_error</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalStatus">regional_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.succeededCount">succeeded_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expected_count`<sup>Required</sup> <a name="expected_count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expectedCount"></a>

```python
expected_count: str
```

- *Type:* str

---

##### `expired_count`<sup>Required</sup> <a name="expired_count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.expiredCount"></a>

```python
expired_count: str
```

- *Type:* str

---

##### `failed_count`<sup>Required</sup> <a name="failed_count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.failedCount"></a>

```python
failed_count: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `regional_error`<sup>Required</sup> <a name="regional_error" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalError"></a>

```python
regional_error: str
```

- *Type:* str

---

##### `regional_status`<sup>Required</sup> <a name="regional_status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.regionalStatus"></a>

```python
regional_status: str
```

- *Type:* str

---

##### `succeeded_count`<sup>Required</sup> <a name="succeeded_count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.succeededCount"></a>

```python
succeeded_count: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetails</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryDetails">adhoc_query_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryRegionalDetails">adhoc_query_regional_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.errorMessage">error_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `adhoc_query_details`<sup>Required</sup> <a name="adhoc_query_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryDetails"></a>

```python
adhoc_query_details: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryDetailsList</a>

---

##### `adhoc_query_regional_details`<sup>Required</sup> <a name="adhoc_query_regional_details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.adhocQueryRegionalDetails"></a>

```python
adhoc_query_regional_details: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsAdhocQueryRegionalDetailsList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `error_message`<sup>Required</sup> <a name="error_message" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.errorMessage"></a>

```python
error_message: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItems</a>

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference <a name="DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection">DataOciCloudGuardAdhocQueriesAdhocQueryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.items"></a>

```python
items: DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList">DataOciCloudGuardAdhocQueriesAdhocQueryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCloudGuardAdhocQueriesAdhocQueryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesAdhocQueryCollection">DataOciCloudGuardAdhocQueriesAdhocQueryCollection</a>

---


### DataOciCloudGuardAdhocQueriesFilterList <a name="DataOciCloudGuardAdhocQueriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCloudGuardAdhocQueriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCloudGuardAdhocQueriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]]

---


### DataOciCloudGuardAdhocQueriesFilterOutputReference <a name="DataOciCloudGuardAdhocQueriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_cloud_guard_adhoc_queries

dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCloudGuardAdhocQueriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardAdhocQueries.DataOciCloudGuardAdhocQueriesFilter">DataOciCloudGuardAdhocQueriesFilter</a>]

---



