# `dataOciDatabaseMaintenanceRunHistories` Submodule <a name="`dataOciDatabaseMaintenanceRunHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseMaintenanceRunHistories <a name="DataOciDatabaseMaintenanceRunHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories oci_database_maintenance_run_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories(
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
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunHistoriesFilter]] = None,
  id: str = None,
  maintenance_type: str = None,
  state: str = None,
  target_resource_id: str = None,
  target_resource_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.maintenanceType">maintenance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.targetResourceType">target_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#filter DataOciDatabaseMaintenanceRunHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_type`<sup>Optional</sup> <a name="maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.maintenanceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}.

---

##### `target_resource_id`<sup>Optional</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.targetResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}.

---

##### `target_resource_type`<sup>Optional</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.Initializer.parameter.targetResourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetAvailabilityDomain">reset_availability_domain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetMaintenanceType">reset_maintenance_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceId">reset_target_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceType">reset_target_resource_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunHistoriesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]]

---

##### `reset_availability_domain` <a name="reset_availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetAvailabilityDomain"></a>

```python
def reset_availability_domain() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_maintenance_type` <a name="reset_maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetMaintenanceType"></a>

```python
def reset_maintenance_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_target_resource_id` <a name="reset_target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceId"></a>

```python
def reset_target_resource_id() -> None
```

##### `reset_target_resource_type` <a name="reset_target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.resetTargetResourceType"></a>

```python
def reset_target_resource_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistories resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDatabaseMaintenanceRunHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDatabaseMaintenanceRunHistories to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDatabaseMaintenanceRunHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseMaintenanceRunHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList">DataOciDatabaseMaintenanceRunHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceRunHistories">maintenance_run_histories</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceTypeInput">maintenance_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceIdInput">target_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceTypeInput">target_resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filter"></a>

```python
filter: DataOciDatabaseMaintenanceRunHistoriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList">DataOciDatabaseMaintenanceRunHistoriesFilterList</a>

---

##### `maintenance_run_histories`<sup>Required</sup> <a name="maintenance_run_histories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceRunHistories"></a>

```python
maintenance_run_histories: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `maintenance_type_input`<sup>Optional</sup> <a name="maintenance_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceTypeInput"></a>

```python
maintenance_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `target_resource_id_input`<sup>Optional</sup> <a name="target_resource_id_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceIdInput"></a>

```python
target_resource_id_input: str
```

- *Type:* str

---

##### `target_resource_type_input`<sup>Optional</sup> <a name="target_resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceTypeInput"></a>

```python
target_resource_type_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_type`<sup>Required</sup> <a name="maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistories.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseMaintenanceRunHistoriesConfig <a name="DataOciDatabaseMaintenanceRunHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  availability_domain: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunHistoriesFilter]] = None,
  id: str = None,
  maintenance_type: str = None,
  state: str = None,
  target_resource_id: str = None,
  target_resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#compartment_id DataOciDatabaseMaintenanceRunHistories#compartment_id}.

---

##### `availability_domain`<sup>Optional</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#availability_domain DataOciDatabaseMaintenanceRunHistories#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#filter DataOciDatabaseMaintenanceRunHistories#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#id DataOciDatabaseMaintenanceRunHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maintenance_type`<sup>Optional</sup> <a name="maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#maintenance_type DataOciDatabaseMaintenanceRunHistories#maintenance_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#state DataOciDatabaseMaintenanceRunHistories#state}.

---

##### `target_resource_id`<sup>Optional</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_id DataOciDatabaseMaintenanceRunHistories#target_resource_id}.

---

##### `target_resource_type`<sup>Optional</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesConfig.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#target_resource_type DataOciDatabaseMaintenanceRunHistories#target_resource_type}.

---

### DataOciDatabaseMaintenanceRunHistoriesFilter <a name="DataOciDatabaseMaintenanceRunHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#name DataOciDatabaseMaintenanceRunHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#values DataOciDatabaseMaintenanceRunHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#regex DataOciDatabaseMaintenanceRunHistories#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#name DataOciDatabaseMaintenanceRunHistories#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#values DataOciDatabaseMaintenanceRunHistories#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_maintenance_run_histories#regex DataOciDatabaseMaintenanceRunHistories#regex}.

---

### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories()
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails()
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails()
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails()
```


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseMaintenanceRunHistoriesFilterList <a name="DataOciDatabaseMaintenanceRunHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDatabaseMaintenanceRunHistoriesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]]

---


### DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDatabaseMaintenanceRunHistoriesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesFilter">DataOciDatabaseMaintenanceRunHistoriesFilter</a>]

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration">estimated_patch_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.patchingStatus">patching_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingEnded">time_patching_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingStarted">time_patching_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_patch_duration`<sup>Required</sup> <a name="estimated_patch_duration" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.estimatedPatchDuration"></a>

```python
estimated_patch_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patching_status`<sup>Required</sup> <a name="patching_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.patchingStatus"></a>

```python
patching_status: str
```

- *Type:* str

---

##### `time_patching_ended`<sup>Required</sup> <a name="time_patching_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingEnded"></a>

```python
time_patching_ended: str
```

- *Type:* str

---

##### `time_patching_started`<sup>Required</sup> <a name="time_patching_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.timePatchingStarted"></a>

```python
time_patching_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.dbServerPatchingDetails">db_server_patching_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_server_patching_details`<sup>Required</sup> <a name="db_server_patching_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.dbServerPatchingDetails"></a>

```python
db_server_patching_details: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsDbServerPatchingDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime">estimated_db_server_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime">estimated_network_switches_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime">estimated_storage_server_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime">total_estimated_patching_time</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `estimated_db_server_patching_time`<sup>Required</sup> <a name="estimated_db_server_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedDbServerPatchingTime"></a>

```python
estimated_db_server_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `estimated_network_switches_patching_time`<sup>Required</sup> <a name="estimated_network_switches_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedNetworkSwitchesPatchingTime"></a>

```python
estimated_network_switches_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `estimated_storage_server_patching_time`<sup>Required</sup> <a name="estimated_storage_server_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.estimatedStorageServerPatchingTime"></a>

```python
estimated_storage_server_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_estimated_patching_time`<sup>Required</sup> <a name="total_estimated_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.totalEstimatedPatchingTime"></a>

```python
total_estimated_patching_time: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTime</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentCustomActionTimeoutInMins">current_custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentPatchingComponent">current_patching_component</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.customActionTimeoutInMins">custom_action_timeout_in_mins</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedComponentPatchingStartTime">estimated_component_patching_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedPatchingTime">estimated_patching_time</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isCustomActionTimeoutEnabled">is_custom_action_timeout_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isDstFileUpdateEnabled">is_dst_file_update_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceSubtype">maintenance_subtype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceType">maintenance_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchFailureCount">patch_failure_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchId">patch_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingEndTime">patching_end_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingMode">patching_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStartTime">patching_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStatus">patching_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.peerMaintenanceRunId">peer_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetDbServerVersion">target_db_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceId">target_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceType">target_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetStorageServerVersion">target_storage_server_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeScheduled">time_scheduled</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `current_custom_action_timeout_in_mins`<sup>Required</sup> <a name="current_custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentCustomActionTimeoutInMins"></a>

```python
current_custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `current_patching_component`<sup>Required</sup> <a name="current_patching_component" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.currentPatchingComponent"></a>

```python
current_patching_component: str
```

- *Type:* str

---

##### `custom_action_timeout_in_mins`<sup>Required</sup> <a name="custom_action_timeout_in_mins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.customActionTimeoutInMins"></a>

```python
custom_action_timeout_in_mins: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `estimated_component_patching_start_time`<sup>Required</sup> <a name="estimated_component_patching_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedComponentPatchingStartTime"></a>

```python
estimated_component_patching_start_time: str
```

- *Type:* str

---

##### `estimated_patching_time`<sup>Required</sup> <a name="estimated_patching_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.estimatedPatchingTime"></a>

```python
estimated_patching_time: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsEstimatedPatchingTimeList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_custom_action_timeout_enabled`<sup>Required</sup> <a name="is_custom_action_timeout_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```python
is_custom_action_timeout_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_dst_file_update_enabled`<sup>Required</sup> <a name="is_dst_file_update_enabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.isDstFileUpdateEnabled"></a>

```python
is_dst_file_update_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `maintenance_subtype`<sup>Required</sup> <a name="maintenance_subtype" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceSubtype"></a>

```python
maintenance_subtype: str
```

- *Type:* str

---

##### `maintenance_type`<sup>Required</sup> <a name="maintenance_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.maintenanceType"></a>

```python
maintenance_type: str
```

- *Type:* str

---

##### `patch_failure_count`<sup>Required</sup> <a name="patch_failure_count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchFailureCount"></a>

```python
patch_failure_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `patch_id`<sup>Required</sup> <a name="patch_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchId"></a>

```python
patch_id: str
```

- *Type:* str

---

##### `patching_end_time`<sup>Required</sup> <a name="patching_end_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingEndTime"></a>

```python
patching_end_time: str
```

- *Type:* str

---

##### `patching_mode`<sup>Required</sup> <a name="patching_mode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingMode"></a>

```python
patching_mode: str
```

- *Type:* str

---

##### `patching_start_time`<sup>Required</sup> <a name="patching_start_time" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStartTime"></a>

```python
patching_start_time: str
```

- *Type:* str

---

##### `patching_status`<sup>Required</sup> <a name="patching_status" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.patchingStatus"></a>

```python
patching_status: str
```

- *Type:* str

---

##### `peer_maintenance_run_id`<sup>Required</sup> <a name="peer_maintenance_run_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.peerMaintenanceRunId"></a>

```python
peer_maintenance_run_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `target_db_server_version`<sup>Required</sup> <a name="target_db_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetDbServerVersion"></a>

```python
target_db_server_version: str
```

- *Type:* str

---

##### `target_resource_id`<sup>Required</sup> <a name="target_resource_id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceId"></a>

```python
target_resource_id: str
```

- *Type:* str

---

##### `target_resource_type`<sup>Required</sup> <a name="target_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetResourceType"></a>

```python
target_resource_type: str
```

- *Type:* str

---

##### `target_storage_server_version`<sup>Required</sup> <a name="target_storage_server_version" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.targetStorageServerVersion"></a>

```python
target_storage_server_version: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `time_scheduled`<sup>Required</sup> <a name="time_scheduled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeScheduled"></a>

```python
time_scheduled: str
```

- *Type:* str

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetails</a>

---


### DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference <a name="DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_database_maintenance_run_histories

dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.dbServersHistoryDetails">db_servers_history_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.maintenanceRunDetails">maintenance_run_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_servers_history_details`<sup>Required</sup> <a name="db_servers_history_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.dbServersHistoryDetails"></a>

```python
db_servers_history_details: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesDbServersHistoryDetailsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `maintenance_run_details`<sup>Required</sup> <a name="maintenance_run_details" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.maintenanceRunDetails"></a>

```python
maintenance_run_details: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesMaintenanceRunDetailsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistoriesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseMaintenanceRunHistories.DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories">DataOciDatabaseMaintenanceRunHistoriesMaintenanceRunHistories</a>

---



