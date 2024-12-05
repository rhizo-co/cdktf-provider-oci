# `dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities` Submodule <a name="`dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities oci_capacity_management_occ_availability_catalog_occ_availabilities}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  occ_availability_catalog_id: str,
  date_expected_capacity_handover: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter]] = None,
  id: str = None,
  resource_name: str = None,
  resource_type: str = None,
  workload_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#date_expected_capacity_handover DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#date_expected_capacity_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.workloadType">workload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#workload_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#workload_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.occAvailabilityCatalogId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#occ_availability_catalog_id}.

---

##### `date_expected_capacity_handover`<sup>Optional</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.dateExpectedCapacityHandover"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#date_expected_capacity_handover DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#date_expected_capacity_handover}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#filter DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.resourceName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_name}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_type}.

---

##### `workload_type`<sup>Optional</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.Initializer.parameter.workloadType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#workload_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#workload_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetDateExpectedCapacityHandover">reset_date_expected_capacity_handover</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetResourceName">reset_resource_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetWorkloadType">reset_workload_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]]

---

##### `reset_date_expected_capacity_handover` <a name="reset_date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetDateExpectedCapacityHandover"></a>

```python
def reset_date_expected_capacity_handover() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_resource_name` <a name="reset_resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetResourceName"></a>

```python
def reset_resource_name() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_workload_type` <a name="reset_workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.resetWorkloadType"></a>

```python
def reset_workload_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCollection">occ_availability_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dateExpectedCapacityHandoverInput">date_expected_capacity_handover_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCatalogIdInput">occ_availability_catalog_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceNameInput">resource_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.workloadTypeInput">workload_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.filter"></a>

```python
filter: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList</a>

---

##### `occ_availability_collection`<sup>Required</sup> <a name="occ_availability_collection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCollection"></a>

```python
occ_availability_collection: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList</a>

---

##### `date_expected_capacity_handover_input`<sup>Optional</sup> <a name="date_expected_capacity_handover_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dateExpectedCapacityHandoverInput"></a>

```python
date_expected_capacity_handover_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `occ_availability_catalog_id_input`<sup>Optional</sup> <a name="occ_availability_catalog_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCatalogIdInput"></a>

```python
occ_availability_catalog_id_input: str
```

- *Type:* str

---

##### `resource_name_input`<sup>Optional</sup> <a name="resource_name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceNameInput"></a>

```python
resource_name_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `workload_type_input`<sup>Optional</sup> <a name="workload_type_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.workloadTypeInput"></a>

```python
workload_type_input: str
```

- *Type:* str

---

##### `date_expected_capacity_handover`<sup>Required</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.dateExpectedCapacityHandover"></a>

```python
date_expected_capacity_handover: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.occAvailabilityCatalogId"></a>

```python
occ_availability_catalog_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  occ_availability_catalog_id: str,
  date_expected_capacity_handover: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter]] = None,
  id: str = None,
  resource_name: str = None,
  resource_type: str = None,
  workload_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#occ_availability_catalog_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#date_expected_capacity_handover DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#date_expected_capacity_handover}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.resourceName">resource_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.workloadType">workload_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#workload_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#workload_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.occAvailabilityCatalogId"></a>

```python
occ_availability_catalog_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#occ_availability_catalog_id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#occ_availability_catalog_id}.

---

##### `date_expected_capacity_handover`<sup>Optional</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.dateExpectedCapacityHandover"></a>

```python
date_expected_capacity_handover: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#date_expected_capacity_handover DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#date_expected_capacity_handover}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#filter DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#id DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `resource_name`<sup>Optional</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_name}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#resource_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#resource_type}.

---

##### `workload_type`<sup>Optional</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesConfig.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#workload_type DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#workload_type}.

---

### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#values DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#regex DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#name DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#values DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_availability_catalog_occ_availabilities#regex DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities#regex}.

---

### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection()
```


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]]

---


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesFilter</a>]

---


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.availableQuantity">available_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.catalogId">catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.dateFinalCustomerOrder">date_final_customer_order</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.demandedQuantity">demanded_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.totalAvailableQuantity">total_available_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_quantity`<sup>Required</sup> <a name="available_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.availableQuantity"></a>

```python
available_quantity: str
```

- *Type:* str

---

##### `catalog_id`<sup>Required</sup> <a name="catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.catalogId"></a>

```python
catalog_id: str
```

- *Type:* str

---

##### `date_expected_capacity_handover`<sup>Required</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.dateExpectedCapacityHandover"></a>

```python
date_expected_capacity_handover: str
```

- *Type:* str

---

##### `date_final_customer_order`<sup>Required</sup> <a name="date_final_customer_order" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.dateFinalCustomerOrder"></a>

```python
date_final_customer_order: str
```

- *Type:* str

---

##### `demanded_quantity`<sup>Required</sup> <a name="demanded_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.demandedQuantity"></a>

```python
demanded_quantity: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `total_available_quantity`<sup>Required</sup> <a name="total_available_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.totalAvailableQuantity"></a>

```python
total_available_quantity: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItems</a>

---


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference <a name="DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_availability_catalog_occ_availabilities

dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.items"></a>

```python
items: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccAvailabilityCatalogOccAvailabilities.DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection">DataOciCapacityManagementOccAvailabilityCatalogOccAvailabilitiesOccAvailabilityCollection</a>

---



